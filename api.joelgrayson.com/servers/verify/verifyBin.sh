#!/bin/bash

# Input: Needs `signature.bin`, `message.txt`, and `public.pem`
# Output: in console

openssl sha1 -verify public.pem -signature './signature.bin' './message.txt'
