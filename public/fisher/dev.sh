#!/bin/bash

( sleep 1 && open http://localhost:3000/fisher/index.html ) &
npm run dev
