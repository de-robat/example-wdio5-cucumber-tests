Feature: A missing background definition should be reported

    Background: Erroneous background
        Given bound step one is finished
        When unbound step two is finished
        And bound step three is finished

    Scenario: raise an error for missing background
        Then show erroneous background step