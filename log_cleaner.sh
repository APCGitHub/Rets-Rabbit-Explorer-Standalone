#!/bin/bash

log_dir=/Users/aclinton/Dev/Personal/InMyBag-API/storage/logs/ #/home/forge/default/storage/logs/
maxSize=101 #3145728 # in KB => 3GB

for logFile in ${log_dir}*.log; do
	fileSize=$(du -s $logFile | cut -f 1)
	fileName=$(basename ${logFile%.*})
	archiveName=${log_dir}archive-$fileName.zip
	
	if [ $fileSize -ge $maxSize ]; then
		if [ -e "$archiveName" ]; then
			unzip $archiveName
		else
			zip -r $archiveName $logFile
		fi

		#echo "" > $logFile
	fi
done