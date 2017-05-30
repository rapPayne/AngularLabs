#!/bin/bash

# Before running this, you must have installed npm (with Node.js) and
# MongoDB.

# Make sure npm is installed
if ! (npm --version >/dev/null 2>&1) ; then
  echo "npm wasn't found. Make sure npm is installed and in your path and try again." >&2
  exit 2
fi

# Create the wms Database
./loadDatabase.bash
if (( $? != 0 )) ; then
  exit 3
fi

# Update the order dates
node ./setOrderDates.js

# Run npm install for the webserver
echo 'Installing all libraries for the web server. This may take a little while.'
cd ../
npm install

# Run npm install for the app
echo 'Installing all libraries for the web app. This may take a *long* while.'
cd warehouse
npm install
if (( $? != 0 )) ; then
  echo "The web app libraries install failed. Not a big deal. Just try it again manually by going 'npm install'"
  exit 4
fi

echo ""
echo "Installation was successful."
echo ""
