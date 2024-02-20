"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = exports.network = void 0;
const core_1 = require("@web3-react/core");
const network_1 = require("@web3-react/network");
const Chains_1 = require("../Chains");
_a = (0, core_1.initializeConnector)((actions) => new network_1.Network({ actions, urlMap: Chains_1.URLS })), exports.network = _a[0], exports.hooks = _a[1];
//# sourceMappingURL=Network.js.map