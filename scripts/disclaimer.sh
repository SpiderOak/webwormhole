#!/bin/bash

REPORT=${1:-"license_report.md"}

yarn -s licenses generate-disclaimer --production > $REPORT

# add separator and newline
echo -e "-----\n" >> $REPORT

# Include Overpass Mono copyright notice
cat assets/fonts/copyright.txt >> $REPORT

echo -e "\n" >> $REPORT

# Include SIL Open Font License
cat web/assets/fonts/OFL.txt >> $REPORT

# yarn ends each license with a newline, keep consistency
echo >> $REPORT
