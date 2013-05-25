#!/bin/bash

if [ ! -k fifo ] 
	then
		mkfifo fifo
fi
