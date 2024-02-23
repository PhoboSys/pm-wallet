"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddChainParameters = exports.URLS = exports.CHAINS = exports.TESTNET_CHAINS = exports.MAINNET_CHAINS = exports.MUMBAI_ID = exports.POLYGON_ID = void 0;
exports.POLYGON_ID = 137;
exports.MUMBAI_ID = 80001;
const MATIC = {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
};
function isExtendedChainInformation(chainInformation) {
    return !!chainInformation.nativeCurrency;
}
exports.MAINNET_CHAINS = {
    [exports.POLYGON_ID]: {
        urls: ['https://polygon-rpc.com'].filter(Boolean),
        name: 'Polygon Mainnet',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://polygonscan.com'],
    },
};
exports.TESTNET_CHAINS = {
    [exports.MUMBAI_ID]: {
        urls: ['https://rpc-mumbai.maticvigil.com'].filter(Boolean),
        name: 'Polygon Mumbai',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    },
};
exports.CHAINS = Object.assign(Object.assign({}, exports.MAINNET_CHAINS), exports.TESTNET_CHAINS);
exports.URLS = Object.keys(exports.CHAINS).reduce((accumulator, chainId) => {
    const validURLs = exports.CHAINS[Number(chainId)].urls;
    if (validURLs.length) {
        accumulator[Number(chainId)] = validURLs;
    }
    return accumulator;
}, {});
function getAddChainParameters(chainId) {
    const chainInformation = exports.CHAINS[chainId];
    if (isExtendedChainInformation(chainInformation)) {
        return {
            chainId,
            chainName: chainInformation.name,
            nativeCurrency: chainInformation.nativeCurrency,
            rpcUrls: chainInformation.urls,
            blockExplorerUrls: chainInformation.blockExplorerUrls,
        };
    }
    else {
        return chainId;
    }
}
exports.getAddChainParameters = getAddChainParameters;
//# sourceMappingURL=index.js.map