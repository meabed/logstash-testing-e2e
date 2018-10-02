#!/usr/bin/env bash

curl -X POST http://localhost:9001/receive-message -H 'Content-Type: application/json' -d '{
  "host": "192.168.64.1",
  "headers": {
    "http_host": "dev-machine:8888",
    "content_type": "application/json",
    "request_path": "/",
    "accept_encoding": "gzip",
    "http_version": "HTTP/1.1",
    "request_method": "POST",
    "http_accept": null,
    "x_custom_header": "myvalue",
    "http_user_agent": "Go-http-client/1.1",
    "content_length": "47"
  },
  "@timestamp": "2018-10-02T08:17:15.644Z",
  "title": "Buy cheese and bread for breakfast.",
  "@version": "1"
}'
