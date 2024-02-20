"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = exports.metamask = void 0;
const core_1 = require("@web3-react/core");
const metamask_1 = require("@web3-react/metamask");
_a = (0, core_1.initializeConnector)((actions) => new metamask_1.MetaMask({ actions })), exports.metamask = _a[0], exports.hooks = _a[1];
//# sourceMappingURL=Metamask.js.map