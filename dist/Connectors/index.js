"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connectors = void 0;
const CoinbaseWallet_1 = require("../Connectors/CoinbaseWallet");
const Metamask_1 = require("../Connectors/Metamask");
const Network_1 = require("../Connectors/Network");
const WalletConnectV2_1 = require("../Connectors/WalletConnectV2");
exports.Connectors = [
    [Metamask_1.metamask, Metamask_1.hooks],
    [WalletConnectV2_1.walletConnectV2, WalletConnectV2_1.hooks],
    [CoinbaseWallet_1.coinbaseWallet, CoinbaseWallet_1.hooks],
    [Network_1.network, Network_1.hooks],
];
//# sourceMappingURL=index.js.map