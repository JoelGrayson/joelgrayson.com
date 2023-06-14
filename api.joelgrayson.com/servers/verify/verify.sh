#!/bin/bash

# Input: Needs `signature.txt`, `message.txt`, and `public.pem`
# Output: in console

openssl enc -d -a -in './signature.txt' -out './signature.bin' #turn txt signature to hex
openssl sha1 -verify public.pem -signature './signature.bin' './message.txt'
