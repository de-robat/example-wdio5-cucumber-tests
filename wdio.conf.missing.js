let origConfig = require('./wdio.conf');

origConfig.config.specs = ["./tests/**/background*.feature"];

module.exports = origConfig;