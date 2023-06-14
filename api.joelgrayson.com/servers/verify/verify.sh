#!/bin/bash

# Input: Needs `signature.txt`, `message.txt`, and `public.pem`
# Output: in console

sig_file='../../private/signature'

openssl enc -d -a -in "$sig_file.txt" -out "$sig_file.bin" #turn txt signature to hex
openssl sha1 -verify public.pem -signature "$sig_file.bin" './message.txt'

