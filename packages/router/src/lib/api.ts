import { Token } from '@sushiswap/currency'
import prisma from '@sushiswap/database'

/**
 * Get all pools including the tokens provided, where the other token in the pair is approved.
 * @param chainId
 * @param protocol
 * @param version
 * @param poolType
 * @param token0Address
 * @param token1Address
 * @returns
 */
export async function getPoolsByTokenIds(
  chainId: number,
  protocol: string,
  version: string,
  poolType: string,
  token0Address: string,
  token1Address: string,
  size = 50
) {
  const token0Id = chainId.toString().concat(':').concat(token0Address.toLowerCase())
  const token1Id = chainId.toString().concat(':').concat(token1Address.toLowerCase())

  try {
    const result = await Promise.all([
      prisma.token.findFirstOrThrow({
        include: {
          pools0: {
            where: {
              chainId,
              protocol,
              version,
              type: poolType,
              OR: [
                {
                  token0Id: token0Id,
                  token1: {
                    status: 'APPROVED',
                  },
                },
                {
                  token1Id: token0Id,
                  token0: {
                    status: 'APPROVED',
                  },
                },
              ],
            },
            include: {
              token0: true,
              token1: true,
            },
          },
          pools1: {
            where: {
              chainId,
              protocol,
              version,
              type: poolType,
              OR: [
                {
                  token0Id: token0Id,
                  token1: {
                    status: 'APPROVED',
                  },
                },
                {
                  token1Id: token0Id,
                  token0: {
                    status: 'APPROVED',
                  },
                },
              ],
            },
            include: {
              token0: true,
              token1: true,
            },
          },
        },
        where: {
          id: token0Id,
        },
      }),

      prisma.token.findFirstOrThrow({
        include: {
          pools0: {
            where: {
              chainId,
              protocol,
              version,
              type: poolType,
              OR: [
                {
                  token0Id: token1Id,
                  token1: {
                    status: 'APPROVED',
                  },
                },
                {
                  token1Id: token1Id,
                  token0: {
                    status: 'APPROVED',
                  },
                },
              ],
            },
            include: {
              token0: true,
              token1: true,
            },
          },
          pools1: {
            where: {
              chainId,
              protocol,
              version,
              type: poolType,
              OR: [
                {
                  token0Id: token1Id,
                  token1: {
                    status: 'APPROVED',
                  },
                },
                {
                  token1Id: token1Id,
                  token0: {
                    status: 'APPROVED',
                  },
                },
              ],
            },
            include: {
              token0: true,
              token1: true,
            },
          },
        },
        where: {
          id: token1Id,
        },
      }),
    ])
    await prisma.$disconnect()
    let token0Share = 0
    let token1Share = 0
    // TODO: Ideally this should be handled in the query, quick workaround for now
    const token0Pools = [result[0].pools0, result[0].pools1].flat()
    const token1Pools = [result[1].pools0, result[1].pools1].flat()
    if (token0Pools.length >= size / 2 && token1Pools.length >= size / 2) {
      token0Share = size / 2
      token1Share = size / 2
    } else if (token0Pools.length >= size / 2 && token1Pools.length < size / 2) {
      token1Share = token1Pools.length
      token0Share = size - token1Pools.length
    } else if (token1Pools.length >= size / 2 && token0Pools.length < size / 2) {
      token0Share = token0Pools.length
      token1Share = size - token0Pools.length
    } else {
      token0Share = token0Pools.length
      token1Share = token1Pools.length
    }
    console.log(`getPoolsByTokenIds(), ${protocol}, ${result[0].symbol} share: ${token0Share}, ${result[1].symbol} share: ${token1Share}`)

    const filteredToken0Pools = token0Pools
      .sort((a, b) => Number(b.liquidityUSD) - Number(a.liquidityUSD))
      .slice(0, token0Share)

    const filteredToken1Pools = token1Pools
      .sort((a, b) => Number(b.liquidityUSD) - Number(a.liquidityUSD))
      .slice(0, token1Share)

    const poolMap: Map<string, [Token, Token]> = new Map()
    for (const pool of [filteredToken0Pools, filteredToken1Pools].flat()) {
      const token0 = new Token({
        chainId,
        address: pool.token0.address,
        decimals: pool.token0.decimals,
        symbol: pool.token0.symbol,
        name: pool.token0.name,
      })
      const token1 = new Token({
        chainId,
        address: pool.token1.address,
        decimals: pool.token1.decimals,
        symbol: pool.token1.symbol,
        name: pool.token1.name,
      })
      poolMap.set(pool.address, [token0, token1])
    }

    return poolMap
  } catch (error) {
    await prisma.$disconnect()
    console.error(error)
    return new Map()
  }
}

/**
 * Get top pools
 * @param chainId
 * @param protocol
 * @param version
 * @param poolType
 * @param size
 * @returns
 */
export async function getTopPools(chainId: number, protocol: string, version: string, poolType: string, size = 25) {
  try {
    const result = await prisma.pool.findMany({
      include: {
        token0: true,
        token1: true,
      },
      where: {
        AND: {
          chainId,
          isWhitelisted: true,
          protocol,
          version,
          type: poolType,
        },
      },
      take: size,
      orderBy: {
        liquidityUSD: 'desc',
      },
    })
    await prisma.$disconnect()

    const poolMap: Map<string, [Token, Token]> = new Map()

    for (const pool of result) {
      const token0 = new Token({
        chainId,
        address: pool.token0.address,
        decimals: pool.token0.decimals,
        symbol: pool.token0.symbol,
        name: pool.token0.name,
      })
      const token1 = new Token({
        chainId,
        address: pool.token1.address,
        decimals: pool.token1.decimals,
        symbol: pool.token1.symbol,
        name: pool.token1.name,
      })
      poolMap.set(pool.address, [token0, token1])
    }

    return poolMap
  } catch (error) {
    await prisma.$disconnect()
    console.error(error)
    return new Map()
  }
}
