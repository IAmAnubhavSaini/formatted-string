"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatted(fmt, obj) {
    if (typeof fmt !== typeof '') {
        throw new TypeError('fmt should be string.');
    }
    var keys = fmt.match(/{[^}]*/g) || [''];
    var keyNames = keys === null || keys === void 0 ? void 0 : keys.map(function (x) {
        return x.split('{').pop().split('}').shift();
    });
    var res = fmt;
    keyNames.forEach(function (key) {
        var toReplace = new RegExp('{' + key + '}', 'g');
        res = res.replace(toReplace, obj[key]);
    });
    return res;
}
exports.default = formatted;
//# sourceMappingURL=index.js.map