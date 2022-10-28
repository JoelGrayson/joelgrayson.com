"use strict";
exports.__esModule = true;
function processRedirects(input, isPermanent) {
    var output = [];
    Object.entries(input).forEach(function (_a) {
        var key = _a[0], val = _a[1];
        if (val instanceof Array)
            val.forEach(function (singleVal) {
                var packaged = packageIntoObj(key, singleVal, isPermanent);
                if (packaged)
                    output.push(packaged);
            });
        else {
            var packaged = packageIntoObj(key, val, isPermanent);
            if (packaged)
                output.push(packaged);
        }
    });
    return output;
}
exports["default"] = processRedirects;
function packageIntoObj(key, val, isPermanent) {
    if (val instanceof RegExp) { //Process RegExp into string
        val = "".concat(val).slice(0, -1); // Remove first and last char: /regex/ -> regex
    }
    return {
        source: val + '',
        destination: key,
        permanent: isPermanent
    };
}
