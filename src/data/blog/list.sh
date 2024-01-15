#!/bin/bash

# Needs to be executed from the root of this GitHub project

echo '['
list="$(ls ./pages/blog/*.tsx)"
awk -F / '{print $NF}' <<< "$list" | sed 's/.tsx//g' | sed "s/^/    '/g" | sed "s/$/',/g"
echo ']'

