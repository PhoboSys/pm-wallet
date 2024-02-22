"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = exports.coinbaseWallet = void 0;
const coinbase_wallet_1 = require("@web3-react/coinbase-wallet");
const core_1 = require("@web3-react/core");
const Chains_1 = require("../Chains");
_a = (0, core_1.initializeConnector)((actions) => (new coinbase_wallet_1.CoinbaseWallet({
    actions,
    options: {
        url: Chains_1.URLS[Chains_1.POLYGON_ID][0],
        appName: 'web3-react',
    },
}))), exports.coinbaseWallet = _a[0], exports.hooks = _a[1];
//# sourceMappingURL=CoinbaseWallet.js.map