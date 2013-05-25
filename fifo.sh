#!/bin/bash

if [ ! -k socket ] 
	then
		mkfifo socket
fi
