#!/bin/bash

# ABOUT: run `./prisma.sh studio` instead of `prisma studio`

# shellcheck disable=SC2068
npx prisma $@ --schema ./data/prisma/schema.prisma 

