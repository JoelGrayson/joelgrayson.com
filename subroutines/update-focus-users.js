#!/usr/bin/env node

// Go here for installs: 
// 1. Go here for weekly users: https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/djnloioaddlnmagobbcnjpppmbelfocf/analytics/users
// 2. Set the date range to the greatest (last 5 years)
// 3. Click "Export to CSV" under Weekly users by OS (because Weekly Users over Time uses a weird day-based metric not week-based when exported (not same as what is shown on the graph))
// 4. Rename the file to ~/Downloads/focus-installs.csv
// 5. Run this program with `./update-focus-installs.js`

require('./parts/update-chrome-extensions-users.js')({ name: 'focus', key: 'focusUsers' });

