'use strict';

function formatted(fmt, obj) {
    var keys = fmt.match(/{[^}]*/g);
    var keyNames = keys.map(function (x) {
        return x.split('{').pop().split('}').shift();
    });
    var res = fmt;
    keyNames.forEach(function (key) {
        var toReplace = new RegExp('{' + key + '}', 'g');
        res = res.replace(toReplace, obj[key]);
    });
    return res;
}

module.exports = {
    formatted: formatted
};
