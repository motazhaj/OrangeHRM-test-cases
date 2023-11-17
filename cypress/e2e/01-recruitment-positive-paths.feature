Feature: recruitment
    # TS 1
    Scenario: Hired
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user hires the recruit
        Then the recruit should be hired
