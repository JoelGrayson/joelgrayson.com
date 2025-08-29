#!/usr/bin/env node

// 1. Go to https://appstoreconnect.apple.com/analytics/app/ytd/6464405876/metrics?chartType=singleaxis&measureKey=totalDownloads&zoomType=day
// 2. Click on the three dots and click "Export as CSV"
// 3. Rename the file to ~/Downloads/edit-time-installs.csv
// 4. Run this program with `./update-edit-time-installs.js`

require('./parts/update-app-store-installs.js')({ name: 'edit-time', key: 'editTimeUsers' });

