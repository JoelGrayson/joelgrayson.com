#!/usr/bin/env node

// Go here for installs: https://analytics.google.com/analytics/web/#/p363854482/reports/dashboard?params=_u..nav%3Dmaui%26_r..dimension-value%3D%7B%22dimension%22:%22eventName%22,%22value%22:%22install%22%7D%26_u.comparisonOption%3Ddisabled%26_u.date00%3D20230101%26_u.date01%3D20241117&r=events-overview&collectionId=life-cycle
// 1. Go here for weekly users: https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/aflepcmbhmafadnddmdippaajhjnmohj/analytics/users
// 2. Set the date range to the greatest (last 5 years)
// 3. Click "Export to CSV" under Weekly users by OS (because Weekly Users over Time uses a weird day-based metric not week-based when exported (not same as what is shown on the graph))
// 4. Rename the file to ~/Downloads/homework-checker-installs.csv
// 5. Run this program with `./update-homework-checker-installs.js`

require('./parts/update-chrome-extensions-users.js')({ name: 'homework-checker', key: 'homeworkCheckerUsers' });

