"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = exports.walletConnectV2 = void 0;
const core_1 = require("@web3-react/core");
const walletconnect_v2_1 = require("@web3-react/walletconnect-v2");
const Chains_1 = require("../Chains");
const [mainnet, ...optionalChains] = Object.keys(Chains_1.MAINNET_CHAINS).map(Number);
_a = (0, core_1.initializeConnector)((actions) => new walletconnect_v2_1.WalletConnect({
    actions,
    options: {
        projectId: '6bc5fc9fe0861ed78b16c5c7fabb74ee',
        chains: [mainnet],
        optionalChains,
        showQrModal: true,
        // @walletconnect/sign-client at @2.13.1 version requires metadata to be defined or infered from meta tags in html
        metadata: {
            name: 'Oracly',
            description: 'Oracly',
            url: window.location.origin,
            icons: [''],
        },
    },
})), exports.walletConnectV2 = _a[0], exports.hooks = _a[1];
//# sourceMappingURL=WalletConnectV2.js.map