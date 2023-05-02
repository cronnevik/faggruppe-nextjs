# Download base image ubuntu 20.04
FROM node:18.13.0-alpine

# Add extra software
RUN apk add curl mc 

#Kjør manuelt