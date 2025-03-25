#!/bin/bash

J_PATH="/Users/joelgrayson/Desktop/Software/joelgrayson.com/joelgrayson.com/joelgrayson.com"

# Edit Time
open "https://appstoreconnect.apple.com/analytics/app/ltd/6464405876/metrics?chartType=singleaxis&measureKey=totalDownloads&zoomType=day"
open ~/Downloads
echo -e "\e]8;;https://appstoreconnect.apple.com/analytics/app/ltd/6464405876/metrics?chartType=singleaxis&measureKey=totalDownloads&zoomType=day\aEdit Time\e]8;;\a:
Click on three dots and click \"Export as CSV\"
"
read -p "Press enter when done or type \"skip\" " response
if [[ $response != "skip" ]]; then
    # File will be renamed to edit-time-installs.csv
    for file in ~/Downloads/edit_time-total_downloads*.csv; do
        if [[ -f "$file" ]]; then
            mv "$file" ~/Downloads/edit-time-installs.csv
        fi
    done
    $J_PATH/subroutines/update-edit-time-installs.js
else
    echo "Skipped Edit Time"
fi


# Focus for Google Docs
open "https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/djnloioaddlnmagobbcnjpppmbelfocf/analytics/users#:~:text=Weekly%20users%20by%20OS"
echo -e "
\e]8;;https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/djnloioaddlnmagobbcnjpppmbelfocf/analytics/users#:~:text=Weekly%20users%20by%20OS\aFocus for Google Docs\e]8;;\a:
Click \"Export to CSV\" under Weekly users by OS
"
read -p "Press enter when done or type \"skip\" " response
if [[ $response != "skip" ]]; then
    if [[ -f "$HOME/Downloads/Weekly users by OS_djnloioaddlnmagobbcnjpppmbelfocf.csv" ]]; then
        mv "$HOME/Downloads/Weekly users by OS_djnloioaddlnmagobbcnjpppmbelfocf.csv" ~/Downloads/focus-installs.csv
    fi
    $J_PATH/subroutines/update-focus-users.js
else
    echo "Skipped Focus for Google Docs"
fi


# Homework Checker
open "https://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/aflepcmbhmafadnddmdippaajhjnmohj/analytics/users#:~:text=Weekly%20users%20by%20OS"
echo -e "
\e]8;;hhttps://chrome.google.com/webstore/devconsole/61858c1f-4cbf-4529-89f5-3d80b05e9b4c/aflepcmbhmafadnddmdippaajhjnmohj/analytics/users#:~:text=Weekly%20users%20by%20OS\aHomework Checker\e]8;;\a:
Click \"Export to CSV\" under Weekly users by OS
"
read -p "Press enter when done or type \"skip\" " response
if [[ $response != "skip" ]]; then
    if [[ -f "$HOME/Downloads/Weekly users by OS_aflepcmbhmafadnddmdippaajhjnmohj.csv" ]]; then
        mv "$HOME/Downloads/Weekly users by OS_aflepcmbhmafadnddmdippaajhjnmohj.csv" "$HOME/Downloads/homework-checker-installs.csv"
    fi
    $J_PATH/subroutines/update-homework-checker-users.js
else
    echo Skipped Homework Checker
fi

