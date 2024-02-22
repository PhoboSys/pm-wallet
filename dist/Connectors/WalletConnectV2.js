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
        projectId: '69fb9924a262185551f420c7dfef0cde',
        chains: [mainnet],
        optionalChains,
        showQrModal: true,
    },
})), exports.walletConnectV2 = _a[0], exports.hooks = _a[1];
//# sourceMappingURL=WalletConnectV2.js.map