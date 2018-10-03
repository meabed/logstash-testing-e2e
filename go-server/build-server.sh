#!/usr/bin/env bash

MY_DIR="$(dirname "$0")"
OUT_PATH="${MY_DIR}"
IN="${MY_DIR}/server.go"

for GOOS in linux; do
  for GOARCH in amd64; do
    echo "Building ${GOOS}-${GOARCH}"
    S="${OUT_PATH}/server-${GOOS}-${GOARCH}"
    GOOS=${GOOS} GOARCH=${GOARCH} CGO_ENABLED=0 go build -o ${S} ${IN}
    chmod +x ${S}
  done
done

# ${MY_DIR}/server-darwin-amd64 -STATIC_PATH="${MY_DIR}/public" -LH="dev-machine"
