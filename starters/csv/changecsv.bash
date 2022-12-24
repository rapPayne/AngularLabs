#!/bin/bash

# Modifies the Northwind CSV files.

# Change the CustomerIDs to numeric from 5-char alpha. Only found in customers.csv and orders.csv
#numericCustID=1000
#for custID in $(cat customers.csv|cut -f1 -d','| grep -v 'customerID')
#do
#	(( numericCustID++ ))
#	echo $custID $numericCustID
#	for FILE in customers.csv orders.csv
#	do
#		cat $FILE | sed s/$custID/$numericCustID/g > temp.out
#  	mv temp.out $FILE
#	done
#done

# Make the order dates more timely.
# Currently from 7/2014 to 5/2016
#for YEAR in 2017 2016 2015 2014
#do
#	(( NEXTYEAR = YEAR + 1 ))
#	DATERE=${YEAR}'\(-[0-9][0-9]-[0-9][0-9]\)'
#	echo $DATERE
#	cat orders.csv | sed s/$DATERE/${NEXTYEAR}\\1/g > temp.out
#	mv temp.out orders.csv
#done

# Split the first and last names
#rm temp.out
#OLDIFS=$IFS
#IFS="
#"
#for LINE in $(cat customers.csv | grep -v contactName)
#do
#	FULLNAME=$(echo $LINE | cut -f3 -d','  )
#	FIRST=$(echo $FULLNAME | cut -f1 -d' ')
#	LAST=$(echo $FULLNAME | cut -f2 -d' ')
#	echo FULLNAME $FULLNAME 'First' $FIRST Last $LAST
#	echo $LINE,$FIRST,$LAST >> temp.out
#done
#IFS=$OLDIFS
#mv temp.out customers.csv
#You'll need to edit customers.csv to add header columns for 'given' and 'family'. Also fix 'Freyere'

# Add an email address
#rm temp.out
#DOMAINS=(gmail.com,mailinator.com,aol.com,outlook.com,yahoo.com,inbox.com,icloud.com,mail.com,zoho.com,yandex.com)
#DOMAINS=("aol.com", "att.net", "comcast.net", "facebook.com", "gmail.com", "gmx.com", "googlemail.com", "google.com", "hotmail.com", "hotmail.co.uk", "mac.com", "me.com", "mail.com", "msn.com", "live.com", "sbcglobal.net", "verizon.net", "yahoo.com")
#OLDIFS=$IFS
#IFS="
#"
#for LINE in $(cat customers.csv)
#do
#	(( RAND = RANDOM % ${#DOMAINS[*]} ))
#
#	FULLNAME=$(echo $LINE | cut -f3 -d','  )
#	FIRST=$(echo $FULLNAME | cut -f1 -d' ')
#	LAST=$(echo $FULLNAME | cut -f2 -d' ')
#	EMAIL=${FIRST}.${LAST}@${DOMAINS[$RAND]} 
#	echo RAND $RAND EMAIL $EMAIL FULLNAME $FULLNAME 'First' $FIRST Last $LAST
#	echo $LINE,$EMAIL >> temp.out
#done
#IFS=$OLDIFS
#mv temp.out customers.csv

# Create the inventory csv file
#LOCATIONS=(A B C D E)
#for i in {7..77}
#do
#	PRODUCTID=$i
#	(( LOCATION1 = RANDOM % ${#LOCATIONS[*]} ))
#	(( LOCATION2 = RANDOM % ${#LOCATIONS[*]} ))
#	(( SUB1 = RANDOM % 8 ))
#	(( SUB2 = RANDOM % 8 ))
#	LOCATION=${LOCATIONS[$LOCATION1]}${SUB1}${LOCATIONS[$LOCATION2]}${SUB2}
#	(( QUANTITY = RANDOM % 500 ))
#	echo ${LOCATION},${PRODUCTID},${QUANTITY} > inventory.csv
#done

#Other things to do
# Remove onHand from products


