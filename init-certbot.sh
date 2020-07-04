#!/bin/bash

#--staging \
docker-compose run \
    --rm \
    --name cerbot \
    --entrypoint certbot \
    certbot certonly \
    --dns-cloudflare \
    --dns-cloudflare-credentials /secrets/cloudflare.ini \
    --dns-cloudflare-propagation-seconds 60 \
    -m qiaoli.pg@gmail.com \
    -d "*.lipbcu.love" \
    -d "lipbcu.love" \
    -n \
    --agree-tos

