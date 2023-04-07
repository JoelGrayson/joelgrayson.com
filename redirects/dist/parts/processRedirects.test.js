"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var processRedirects_1 = require("./processRedirects");
test('works on example', function () {
    expect(JSON.stringify((0, processRedirects_1.default)({
        '/new': ['/old', '/old-2']
    }, true))).toEqual(JSON.stringify([
        {
            source: '/old',
            destination: '/new',
            permanent: true,
        },
        {
            source: '/old-2',
            destination: '/new',
            permanent: true,
        }
    ]));
    console.log((0, processRedirects_1.default)({
        '/onedrive-download-link-generator': [/\/onedrive-download-generator(-link)?/, '/download-link-generator-onedrive', '/onedrive-download-link', '/onedrive-link-generator']
    }, true));
});
