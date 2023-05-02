#!/bin/bash

tsc --watch --outFile dist.js script.ts data.ts &
live-server
