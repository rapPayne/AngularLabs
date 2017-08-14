#!/bin/bash

dbName="wms"

# Start up MongoDB
mongod >/tmp/mongo.log 2>&1 &

# Make sure MongoDB is running
if ! (ps -e | grep mongod | grep -v grep > /dev/null) ; then
  echo "MongoDB server is not running. Run 'mongod' in another window and try again." >&2
  exit 1
fi

# Make sure mongoimport is in the PATH
if ! (mongoimport --version > /dev/null) ; then
  echo "I can't find mongoimport. Get it in your PATH and try again." >&2
  exit 1
fi

# Make sure the folder holding the JSON files exists. (default name is 'db')
filesLocation=${1:-db}
if ! [[ -d "$filesLocation" ]] ; then
  echo "$filesLocation does not exist. Give me the directory where your json files are located." >&2
  exit 1
fi
cd $filesLocation

files=*.json
ls $files > /dev/null 2>/dev/null
if (( $? != 0 )) ; then
  echo "No json files found in $filesLocation. Check your directory and try again." >&2
  exit 2
fi

# For each file in the db json file directory, load the file into MongoDB
for file in $files ; do
  echo "Importing file $file"
  collection=${file/.json/""}
  mongoimport --db $dbName --collection $collection --drop --file $file
done

echo "Finished importing all collections into the wms database"