Feature: recruitment
    # TS 1
    Scenario: Reject Initiated
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 2
    Scenario: Reject Shortlist
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 3
    Scenario: Reject Interview Scheduled
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 4
    Scenario: Reject Interview Passed
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 5
    Scenario: Failed Interview
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as failed
        Then the status should be failed interview

    # TS 6
    Scenario: Reject Failed Interview
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as failed
        And the user rejects the recruit
        Then the recruit should be rejecred

    #TS 7
    Scenario: Reject Job Offer
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user rejects the recruit
        Then the recruit should be rejecred

    #TS 8
    Scenario: Job Offer Declined
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user marks job offer as declined
        Then the status should be job offer declined

    #TS 9
    Scenario: Reject Job Offer Declined
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user marks job offer as declined
        And the user rejects the recruit
        Then the recruit should be rejecred