"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnName = exports.Connectors = exports.getAddChainParameters = exports.URLS = exports.CHAINS = exports.MetaMask = exports.CoinbaseWallet = exports.Network = exports.WalletConnect = exports.useWeb3React = exports.Web3ReactProvider = void 0;
var core_1 = require("@web3-react/core");
Object.defineProperty(exports, "Web3ReactProvider", { enumerable: true, get: function () { return core_1.Web3ReactProvider; } });
Object.defineProperty(exports, "useWeb3React", { enumerable: true, get: function () { return core_1.useWeb3React; } });
var walletconnect_v2_1 = require("@web3-react/walletconnect-v2");
Object.defineProperty(exports, "WalletConnect", { enumerable: true, get: function () { return walletconnect_v2_1.WalletConnect; } });
var network_1 = require("@web3-react/network");
Object.defineProperty(exports, "Network", { enumerable: true, get: function () { return network_1.Network; } });
var coinbase_wallet_1 = require("@web3-react/coinbase-wallet");
Object.defineProperty(exports, "CoinbaseWallet", { enumerable: true, get: function () { return coinbase_wallet_1.CoinbaseWallet; } });
var metamask_1 = require("@web3-react/metamask");
Object.defineProperty(exports, "MetaMask", { enumerable: true, get: function () { return metamask_1.MetaMask; } });
var Chains_1 = require("./Chains");
Object.defineProperty(exports, "CHAINS", { enumerable: true, get: function () { return Chains_1.CHAINS; } });
Object.defineProperty(exports, "URLS", { enumerable: true, get: function () { return Chains_1.URLS; } });
Object.defineProperty(exports, "getAddChainParameters", { enumerable: true, get: function () { return Chains_1.getAddChainParameters; } });
var Connectors_1 = require("./Connectors");
Object.defineProperty(exports, "Connectors", { enumerable: true, get: function () { return Connectors_1.Connectors; } });
var Utils_1 = require("./Utils");
Object.defineProperty(exports, "getConnName", { enumerable: true, get: function () { return Utils_1.getConnName; } });
//# sourceMappingURL=index.js.map