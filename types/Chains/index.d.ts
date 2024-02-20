import type { AddEthereumChainParameter } from '@web3-react/types';
export declare const POLYGON_ID = 137;
export declare const MUMBAI_ID = 80001;
interface BasicChainInformation {
    urls: string[];
    name: string;
}
interface ExtendedChainInformation extends BasicChainInformation {
    nativeCurrency: AddEthereumChainParameter['nativeCurrency'];
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls'];
}
type ChainConfig = {
    [chainId: number]: BasicChainInformation | ExtendedChainInformation;
};
export declare const MAINNET_CHAINS: ChainConfig;
export declare const TESTNET_CHAINS: ChainConfig;
export declare const CHAINS: ChainConfig;
export declare const URLS: {
    [chainId: number]: string[];
};
export declare function getAddChainParameters(chainId: number): AddEthereumChainParameter | number;
export {};
