let origConfig = require('./wdio.conf');

origConfig.config.specs = ["./tests/**/dnd.feature"];

module.exports = origConfig;