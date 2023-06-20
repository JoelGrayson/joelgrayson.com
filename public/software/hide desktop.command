#!/bin/bash

# Remove desktop icons
defaults write com.apple.finder CreateDesktop false
killall Finder


# Create show desktop executable in downloads folder
show_desktop_location="$HOME/Downloads/show desktop.command"

echo """#!/bin/bash

# Show desktop icons
defaults write com.apple.finder CreateDesktop true
killall Finder

rm '$show_desktop_location' #remove show desktop script after shown

""" > "$show_desktop_location" #create show desktop script after hiding

chmod +x "$show_desktop_location"


