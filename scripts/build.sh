#!/bin/bash

build() {
    echo 'building extension'

    # clean up
    rm -rf dist/*

    # copy script to open extension in single page
    cp src/utils/background/background.js dist

    # chrome extension doesn't allow inline script
    export INLINE_RUNTIME_CHUNK=false
    
    # prevent generating sourcemap
    export GENERATE_SOURCEMAP=false

    # react-scripts build generate by default PRODUCTION build
    react-scripts build

    # copy from build to dist, build could still be used by 'npm run start'
    mkdir -p dist
    cp -r build/* dist
}

build