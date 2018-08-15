#!/usr/bin/env node
const [,, ...args] = process.argv;
const sum = require('./index');

sum(args[0], args[1])
  .then(response => console.log(response))
  .catch(err => console.error(err))