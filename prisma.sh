#!/bin/bash

# ABOUT: run as ./prisma.sh studio instead of prisma studio

npx prisma "$1" --schema ./components/data/schema.prisma


