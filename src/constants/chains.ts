/**
 * List of all the networks supported by the Uniswap Interface
 */
export enum SupportedChainId {
  MAINNET = 1,
  RINKEBY = 4,
  GOERLI = 5,

  OPTIMISM = 10,

  POLYGON = 137,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MAINNET]: 'mainnet',
  [SupportedChainId.RINKEBY]: 'rinkeby',
  [SupportedChainId.GOERLI]: 'goerli',
  [SupportedChainId.POLYGON]: 'polygon',
  [SupportedChainId.OPTIMISM]: 'optimism',
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export function isSupportedChain(chainId: number | null | undefined): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId]
}

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.POLYGON,
  SupportedChainId.OPTIMISM,
]

/**
 * Unsupported networks for V2 pool behavior.
 */
export const UNSUPPORTED_V2POOL_CHAIN_IDS = [SupportedChainId.POLYGON, SupportedChainId.OPTIMISM]

export const TESTNET_CHAIN_IDS = [SupportedChainId.RINKEBY, SupportedChainId.GOERLI] as const

export type SupportedTestnetChainId = typeof TESTNET_CHAIN_IDS[number]

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.RINKEBY,
  SupportedChainId.GOERLI,
  SupportedChainId.POLYGON,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [SupportedChainId.OPTIMISM] as const

export type SupportedL2ChainId = typeof L2_CHAIN_IDS[number]
