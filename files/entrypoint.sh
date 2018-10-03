#!/usr/bin/env bash

echo "starting Go-Server" ; \
/go-server/server-linux-amd64 -P 9001 -STATIC_PATH=/go-server/public & \
echo "starting Logstash server" ; \
/usr/local/bin/docker-entrypoint
