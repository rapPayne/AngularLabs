#!/bin/bash

# Before running this, you must have installed npm (with Node.js) and
# MongoDB.

# Make sure npm is installed
if ! (npm --version >/dev/null 2>&1) ; then
  echo "npm wasn't found. Make sure npm is installed and in your path and try again." >&2
  exit 2
fi

# Run npm install for the webserver
echo 'Installing all libraries for the web server. This may take a little while.'
cd ../webServer
npm install
cd -		# Go back to setup folder

# Create the wms Database
./loadDatabase.bash
if (( $? != 0 )) ; then
  exit 3
fi

# Update the order dates
echo "Updating the Mongo database data."
node ./setOrderDates.js

echo ""
echo "Installation was successful."
echo ""
