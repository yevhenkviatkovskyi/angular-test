#!/bin/sh
set -e

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ] || { [ -f "${1}" ] && ! [ -x "${1}" ]; }; then
  set -- node "$@"
fi

if [ "${SERVICE_ENV}" = "local" ]; then
  npm install
  npm run start
fi

exec "$@"
