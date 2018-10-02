#!/usr/bin/env bash

my_dir="$(dirname "$0")"
host=${1}
file=${2}

content=`cat ${my_dir}/${file}`

curl -X POST "${host}/${file}" -d "${content}"
