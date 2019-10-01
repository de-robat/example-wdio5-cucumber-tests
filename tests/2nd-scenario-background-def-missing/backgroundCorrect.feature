Feature: A missing background definition should be reported

    Scenario: Missing step is properly detected when part of a scenario
        Given bound step one is finished
        When unbound step two is finished
        And bound step three is finished
        Then show erroneous background step