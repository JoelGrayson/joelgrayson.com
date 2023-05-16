#!/bin/bash

echo '['
list="$(ls ~/Desktop/Software/joelgrayson.com/joelgrayson.com/joelgrayson.com/pages/perspective/*.tsx)"
awk -F / '{print $NF}' <<< "$list" | sed 's/.tsx//g' | sed "s/^/    '/g" | sed "s/$/',/g"
echo ']'
