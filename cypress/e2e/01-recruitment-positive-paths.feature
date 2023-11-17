Feature: recruitment
    # TS 1
    Scenario: Application Initiated
        Given the user is on the recruitment page
        When the user adds a new recruit
        Then the application should be initiated

    # TS 2
    Scenario: Shortlisted
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        Then the recruit should be shortlisted

    # TS 3
    Scenario: Hired
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        Then the recruit should be scheduled for an interview

    # TS 4
    Scenario: Hired
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        Then the recruit should pass the interview

    # TS 5
    Scenario: Hired
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        Then the recruit is offered the job

    # TS 6
    Scenario: Hired
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user hires the recruit
        Then the recruit should be hired
