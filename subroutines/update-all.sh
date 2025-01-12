#!/bin/bash

J_PATH="/Users/joelgrayson/Desktop/Software/joelgrayson.com/joelgrayson.com/joelgrayson.com"
open "https://appstoreconnect.apple.com/analytics/app/ltd/6464405876/metrics?chartType=singleaxis&measureKey=totalDownloads&zoomType=day"
open ~/Downloads
printf "Edit Time:
Click on three dots and click \"Export as CSV\"
Rename file to edit-time-installs.csv
"
pbcopy <<< edit-time-installs.csv
read -p "Press enter when done "
$J_PATH/subroutines/update-edit-time-installs.js


open "https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/djnloioaddlnmagobbcnjpppmbelfocf/analytics/users#:~:text=Weekly%20users%20by%20OS"
printf "
Focus for Google Docs:
Click \"Export to CSV\" under Weekly users by OS
Rename file to focus-installs.csv
"
pbcopy <<< focus-installs.csv
read -p "Press enter when done "
$J_PATH/subroutines/update-focus-users.js


open "https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/aflepcmbhmafadnddmdippaajhjnmohj/analytics/users#:~:text=Weekly%20users%20by%20OS"
printf "
Homework Checker:
Click \"Export to CSV\" under Weekly users by OS
Rename file to homework-checker-installs.csv
"
pbcopy <<< homework-checker-installs.csv
read -p "Press enter when done "
$J_PATH/subroutines/update-homework-checker-users.js

