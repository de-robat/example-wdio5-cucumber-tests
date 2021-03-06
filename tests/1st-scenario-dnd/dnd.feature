Feature: DND
    Scenario: Drag and Drop should raise all native Events
        Given I am seeing the test page
        When I drag and drop
        Then a dragstart event should be raised
        And a dragenter event should be raised
        And a dragover event should be raised
        And a drop event should be raised
        And a dragend event should be raised

    Scenario: Drag and Drop should raise all native Events when done with perf actions
        Given I am seeing the test page
        When I manually drag out of the dragzone and drop on the drag target
        Then a dragstart event should be raised
        And a dragenter event should be raised
        And a dragover event should be raised
        And a drop event should be raised
        And a dragend event should be raised