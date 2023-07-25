import { ChainId } from '@sushiswap/chain'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */

export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
}

export const V3_FACTORY_ADDRESS = {
  [ChainId.ARBITRUM_NOVA]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
  [ChainId.ARBITRUM]: '0x1af415a1EbA07a4986a52B6f2e7dE7003D82231e',
  [ChainId.AVALANCHE]: '0x3e603C14aF37EBdaD31709C4f848Fc6aD5BEc715',
  [ChainId.BSC]: '0x126555dd55a39328F69400d6aE4F782Bd4C34ABb',
  // [ChainId.BTTC]: '',
  // [ChainId.CELO]: '',
  [ChainId.ETHEREUM]: '0xbACEB8eC6b9355Dfc0269C18bac9d6E2Bdc29C4F',
  [ChainId.FANTOM]: '0x7770978eED668a3ba661d51a773d3a992Fc9DDCB',
  [ChainId.FUSE]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.GNOSIS]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
  // [ChainId.KAVA]: '',
  // [ChainId.METIS]: '',
  // [ChainId.MOONBEAM]: '0x2ecd58F51819E8F8BA08A650BEA04Fc0DEa1d523',
  [ChainId.MOONRIVER]: '0x2F255d3f3C0A3726c6c99E74566c4b18E36E3ce6',
  [ChainId.OPTIMISM]: '0x9c6522117e2ed1fE5bdb72bb0eD5E3f2bdE7DBe0',
  [ChainId.POLYGON]: '0x917933899c6a5F8E37F31E19f92CdBFF7e8FF0e2',
  [ChainId.BOBA]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.POLYGON_ZKEVM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.THUNDERCORE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HAQQ]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.CORE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ZKSYNC_ERA]: '0x7aDc30EE139D6216c9CdaDc09B6E1598d4236C26',
  [ChainId.LINEA]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
} as const

export const V3_POSTIION_MANAGER = {
  [ChainId.ARBITRUM_NOVA]: '0x258f7E97149afd7D7F84fa63b10e4A3f0C38B788',
  [ChainId.ARBITRUM]: '0xF0cBce1942A68BEB3d1b73F0dd86C8DCc363eF49',
  [ChainId.AVALANCHE]: '0x18350b048AB366ed601fFDbC669110Ecb36016f3',
  [ChainId.BSC]: '0xF70c086618dcf2b1A461311275e00D6B722ef914',
  // [ChainId.BTTC]: '',
  // [ChainId.CELO]: '',
  [ChainId.ETHEREUM]: '0x2214A42d8e2A1d20635c2cb0664422c528B6A432',
  [ChainId.FANTOM]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
  [ChainId.FUSE]: '0x93395129bd3fcf49d95730D3C2737c17990fF328',
  [ChainId.GNOSIS]: '0xaB235da7f52d35fb4551AfBa11BFB56e18774A65',
  // [ChainId.KAVA]: '',
  // [ChainId.METIS]: '',
  // [ChainId.MOONBEAM]: '0x8f54301F315C56c112D492D9443047D4745dbe9e',
  [ChainId.MOONRIVER]: '0xD045d27c1f7e7f770a807B0a85d8e3F852e0F2BE',
  [ChainId.OPTIMISM]: '0x1af415a1EbA07a4986a52B6f2e7dE7003D82231e',
  [ChainId.POLYGON]: '0xb7402ee99F0A008e461098AC3A27F4957Df89a40',
  [ChainId.BOBA]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.POLYGON_ZKEVM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.THUNDERCORE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.HAQQ]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.CORE]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.ZKSYNC_ERA]: '0x7fbF36429820d790392A0D9C96d29ce465Eb7D4A',
  [ChainId.LINEA]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
} as const

export const V3_TICK_LENS = {
  [ChainId.ARBITRUM_NOVA]: '0xF60e5f4A44a510742457D8064ffd360B12d8D9AF',
  [ChainId.ARBITRUM]: '0x8516944E89f296eb6473d79aED1Ba12088016c9e',
  [ChainId.AVALANCHE]: '0xDdC1b5920723F774d2Ec2C3c9355251A20819776',
  [ChainId.BSC]: '0x10c19390E1Ac2Fd6D0c3643a2320b0abA38E5bAA',
  // [ChainId.BTTC]: '',
  // [ChainId.CELO]: '',
  [ChainId.ETHEREUM]: '0xFB70AD5a200d784E7901230E6875d91d5Fa6B68c',
  [ChainId.FANTOM]: '0xD75F5369724b513b497101fb15211160c1d96550',
  [ChainId.FUSE]: '0xf78031CBCA409F2FB6876BDFDBc1b2df24cF9bEf',
  [ChainId.GNOSIS]: '0xaa26771d497814E81D305c511Efbb3ceD90BF5bd',
  // [ChainId.KAVA]: '',
  // [ChainId.METIS]: '',
  // [ChainId.MOONBEAM]: '0x53b08DbD70327b7Ba3B7886Fc9987BC985d27262',
  [ChainId.MOONRIVER]: '0x6E9Aed2C4cF5ed7E8AB851435225fE1601a1Bc56',
  [ChainId.OPTIMISM]: '0x0367a647A68f304f2A6e453c25033a4249d7F2C6',
  [ChainId.POLYGON]: '0x9fdeA1412e50D78B25aCE4f96d35801647Fdf7dA',
  [ChainId.BOBA]: '0x9B3fF703FA9C8B467F5886d7b61E61ba07a9b51c',
  [ChainId.POLYGON_ZKEVM]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.THUNDERCORE]: '0x0BE808376Ecb75a5CF9bB6D237d16cd37893d904',
  [ChainId.HAQQ]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.CORE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ZKSYNC_ERA]: '0x42BaDAaCb09C42bac83AC8F6B894922ec9a49B57',
  [ChainId.LINEA]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
} as const

export const SUSHISWAP_V3_SUPPORTED_CHAIN_IDS = [
  ChainId.ARBITRUM_NOVA,
  ChainId.ARBITRUM,
  ChainId.AVALANCHE,
  ChainId.BSC,
  ChainId.ETHEREUM,
  ChainId.FANTOM,
  ChainId.FUSE,
  ChainId.GNOSIS,
  ChainId.MOONRIVER,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.BOBA,
  ChainId.POLYGON_ZKEVM,
  ChainId.THUNDERCORE,
  ChainId.HAQQ,
  ChainId.CORE,
  // ChainId.ZKSYNC_ERA,
  ChainId.LINEA,
] as const

export const SushiSwapV3ChainIds = SUSHISWAP_V3_SUPPORTED_CHAIN_IDS

export type SushiSwapV3ChainId = (typeof SUSHISWAP_V3_SUPPORTED_CHAIN_IDS)[number]

export const isSushiSwapV3ChainId = (chainId: ChainId): chainId is SushiSwapV3ChainId =>
  SUSHISWAP_V3_SUPPORTED_CHAIN_IDS.includes(chainId as SushiSwapV3ChainId)
