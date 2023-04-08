"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRedirects = void 0;
var REDIRECTS_1 = require("../REDIRECTS");
function redirects() {
    // Combine redirects
    var arr1 = processRedirects(REDIRECTS_1.permanent, true);
    var arr2 = processRedirects(REDIRECTS_1.temporary, false);
    return arr1.concat(arr2); //return merged permanent & temporary arrays
}
exports.default = redirects;
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
exports.processRedirects = processRedirects;
function packageIntoObj(key, val, isPermanent) {
    if (val instanceof RegExp) //Process RegExp into string
        val = "".concat(val).slice(0, -1); // Remove first and last char: /regex/ -> regex
    var i = 0;
    var replaceStars = function (val) { return val
        .trim()
        .split('/')
        .map(function (path) { return path === '*' ? "slug".concat(++i) : path; })
        .join('/'); };
    if (Array.isArray(val))
        val.map(replaceStars);
    else
        val = replaceStars(val);
    return {
        source: val + '',
        destination: key,
        permanent: isPermanent
    };
}
