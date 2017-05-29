#!/bin/bash

dbName="northwind"

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

# Make sure the CSV files are there
filesLocation=${1:-csv}
if ! [[ -d "$filesLocation" ]] ; then
  echo "$filesLocation does not exist. Give me the directory where your csv files are located." >&2
  exit 1
fi
cd $filesLocation

files=*.csv
ls $files > /dev/null 2>/dev/null
if (( $? != 0 )) ; then
  echo "No csv files found in $filesLocation. Check your directory and try again." >&2
  exit 2
fi

# Destroy the old database
mongo <<EOF
var conn = new Mongo();
var db = conn.getDB("$dbName");
db.dropDatabase();
EOF

# For each file in the CSV file directory, load the file into MongoDB
for file in $files ; do
  echo "Importing file $file"
  collection=${file/.csv/""}
  mongoimport --db $dbName --collection $collection  --type csv --headerline --file $file
done

# Change the featured product field to a true boolean.
mongo northwind <<EOF
db.products.update({"featured":"true"}, {\$set: {featured: true}}, {multi:true});
EOF