# example-wdio5-cucumber-tests

prepare all tests by installing the deps via `npm install` , and run all at once via `npm test`.

# 1st Scenario 

https://github.com/webdriverio/webdriverio/issues/4134#issuecomment-530697538

evaluating a troublesome setup with the native dnd api

to run only this scenario type `npm run test:dnd`

ToDo: For some reason the browser window needs focus for the dnd tests to run, so keep it in foreground

# 2nd Scenario - FIXED since @wdio/cucumber-framework@5.14.3

## update
this issue has been addresed and resolved.

## orig

https://github.com/webdriverio/webdriverio/issues/4555

checking some strange behaviour for unbound cucumber steps in a background definition

to run only this scenario type `npm run test:missing`
