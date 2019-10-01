let cucumber = require('cucumber');

let Given = cucumber.Given;
let When = cucumber.When;
let Then = cucumber.Then;


Given('bound step one is finished', function () {
    //NOP just done
    return true;
})

/* this is the one binding that should be missing!
When('unbound step two is finished', function () {
    throw new Error('should not be uncommented for this testsetup')
})*/

When('bound step three is finished', function () {
    //NOP just done
    return true;
})

Then('show erroneous background step', function () {

})