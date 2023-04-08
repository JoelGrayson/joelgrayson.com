#!/bin/bash

rm -rf compiled-js dist.js
tsc
echo -n 'const jredirects=async ()=>' > dist.js
node ./compiled-js/_internals/processRedirects >> dist.js
printf '; //must be a function that returns a promise\n\nmodule.exports=jredirects;\n' >> dist.js
rm -rf compiled-js
