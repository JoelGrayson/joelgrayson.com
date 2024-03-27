#!/bin/bash

: '
Because BASH_REMATCH does not work with bash "$(curl -s https://joelgrayson.com/rick.sh)", use this:

curl -s https://joelgrayson.com/rick.sh -o rick.sh
chmod +x rick.sh
./rick.sh
rm rick.sh
'

link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

echo "Use 24-hour format, such as 13:00 for 1pm"
read -p "What time? " u_date
u_hour=""
u_minute=""
if [[ $u_date =~ (.+):(.+) ]]; then
    u_hour="${BASH_REMATCH[1]}"
    u_minute="${BASH_REMATCH[2]}"
else
    echo "Invalid time"
    exit 1
fi

echo "Waiting until $u_hour:$u_minute..."

# Every second check if date has passed
while true; do
    if [[ "$(date +%H)" -ge "$u_hour" && "$(date +%M)" -ge "$u_minute" ]]; then
        break
    fi

    echo "Currently not true: <date.now>$(date +%H) >= <u>$u_hour and <date.now>$(date +%M) >= <u>$u_minute"
    # Go up
    echo -ne "\033[1A"

    sleep 1
done

echo "Rick roll time!                                                                                  "
cat <<EOF
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣭⣿⠟⡟⠛⠛⠛⠛⠿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡆⢸⣷⣿⢧⣀⣀⠀⠀⠀⠀⠀⢹⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡴⠂⢀⣼⣿⡿⣾⡿⢿⣿⡇⢷⣶⣤⣾⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⠆⠀⠀⠸⣿⣿⡄⡾⠲⣾⣿⣇⣈⠋⢉⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡴⠀⠈⠛⣿⡇⢠⣿⣧⣤⡽⢠⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠔⠋⠀⠀⠀⠀⣿⣧⣀⠻⠿⠟⣡⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⠈⠙⣷⣦⠴⣟⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣠⣴⢛⣿⡿⢿⡏⠀⠀⣹⠻⣿⣷⣶⢦⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣤⣴⣿⣿⣿⠀⣿⠀⣌⡇⣠⡾⠃⢰⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣄⠀⠀⠀⠀
⠀⣤⣤⣿⣿⣿⣿⣿⡇⠀⣿⣤⣿⡟⠋⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀
⠀⣿⣿⣿⣿⣿⣿⣿⣷⣿⡿⠻⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⣿⣿⣭⣿⣿⣿⣿⣿⣿⣿⣇⣸⣿⣿⣿⣿⣿⠇⠀⠀⠀
⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣻⠋⣤⣿⣿⠂⠀⠀⠀
⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣹⣿⣟⣲⣶⣿⣿⣿⣿⣿⣿⣿⣯⠙⢧⣬⣿⣷⣄⠀⠀⠀
⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢼⣿⣿⢿⠯⢿⣿⣿⣿⣿⣿⡟⠻⠇⠂⢸⣿⣿⣿⣆⠀⠀
⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣭⣭⣽⣿⣿⣿⣿⣿⣿⣿⣿⣦⣴⣀⣸⣿⣿⣿⣿⡄⠀
⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣇⣸⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀
⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⡏⣛⣛⣻⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⠃
EOF

# Open the link
open "$link"

