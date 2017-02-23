#!/usr/bin/env node

require("babel-register");

var script = process.argv[2];
if (!script) {
  console.error("You must specify a script to run.");
  process.exit(1);
}

require('./' + script);
