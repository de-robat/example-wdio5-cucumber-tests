let cucumber = require('cucumber');
let path = require('path');

let Given = cucumber.Given;
let When = cucumber.When;
let Then = cucumber.Then;

Given('I am seeing the test page', () => {
    browser.url(path.join("file:///", process.cwd(), '/src/index.html'));
    browser.execute(function () {
        window.eventLog = [];
    })
});

When('I drag and drop', () => {
    $('.dragel').dragAndDrop($('#dragtarget'), 10);
});

When('I manually drag out of the dragzone and drop on the drag target', function () {
    let dragel = $('.dragel');
    let droptarget = $('#dragtarget');

    let delPos = dragel.getLocation();
    let delSize = dragel.getSize();
    let delCenter = {
        x: Math.floor(delPos.x + delSize.width / 2),
        y: Math.floor(delPos.y + delSize.height / 2)
    }

    let dtPos = droptarget.getLocation();
    let dtSize = droptarget.getSize();
    let dtCenter = {
        x: Math.floor(dtPos.x + dtSize.width / 2),
        y: Math.floor(dtPos.y + dtSize.height / 2)
    }

    let ACTION_BUTTON = 0;

    browser.performActions([{
        type: 'pointer',
        id: 'finger1',
        parameters: {
            pointerType: 'mouse'
        },
        actions: [{
                type: 'pointerMove',
                origin: 'viewport',
                duration: 0,
                x: delCenter.x,
                y: delCenter.y
            },
            {
                type: 'pointerDown',
                button: ACTION_BUTTON
            },
            {
                type: 'pause',
                duration: 10
            }, // emulate human pause
            {
                type: 'pointerMove',
                duration: 100,
                origin: 'viewport',
                x: 0,
                y: 0
            },
            {
                type: 'pause',
                duration: 100
            },
            {
                type: 'pointerMove',
                duration: 100,
                origin: 'viewport',
                x: dtCenter.x,
                y: dtCenter.y
            },
            {
                type: 'pointerUp',
                button: ACTION_BUTTON
            }
        ]
    }]);
});

let dragEvents = ['dragstart', 'dragenter', 'dragover', 'dragleave', 'drop', 'dragend']
Then(new RegExp(`a (${dragEvents.join('|')}) event should be raised`), (eventName) => {
    let eventLog = browser.execute(function () {
        return window.eventLog;
    });

    if (eventLog.indexOf(eventName) == -1) {
        throw new Error(`expected ${eventName} to have been raised but have not seen it`);
    }
})