"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnName = void 0;
const coinbase_wallet_1 = require("@web3-react/coinbase-wallet");
const metamask_1 = require("@web3-react/metamask");
const network_1 = require("@web3-react/network");
const walletconnect_v2_1 = require("@web3-react/walletconnect-v2");
function getConnName(connector) {
    if (connector instanceof metamask_1.MetaMask)
        return 'injected';
    if (connector instanceof walletconnect_v2_1.WalletConnect)
        return 'walletconnect';
    if (connector instanceof coinbase_wallet_1.CoinbaseWallet)
        return 'coinbase';
    if (connector instanceof network_1.Network)
        return 'network';
    return 'Unknown';
}
exports.getConnName = getConnName;
//# sourceMappingURL=index.js.map