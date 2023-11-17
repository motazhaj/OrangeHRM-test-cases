Feature: recruitment
    # Positive paths
    # TS 1
    Scenario: Status: Application Initiated
        Given the user is on the recruitment page
        When the user adds a new recruit
        Then the application should be initiated

    # TS 2
    Scenario: Status: Shortlisted
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        Then the recruit should be shortlisted

    # TS 3
    Scenario: Status: Interview Scheduled
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        Then the recruit should be scheduled for an interview

    # TS 4
    Scenario: Status: Interview Passed
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        Then the recruit should pass the interview

    # TS 5
    Scenario: Status: Job Offered
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        Then the recruit is offered the job

    # TS 6
    Scenario: Status: Hired
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user hires the recruit
        Then the recruit should be hired

# Negative paths

    # TS 1
    Scenario: Status: Reject Initiated
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 2
    Scenario: Status: Reject Shortlist
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 3
    Scenario: Status: Reject Interview Scheduled
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 4
    Scenario: Status: Reject Interview Passed
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user rejects the recruit
        Then the recruit should be rejecred

    # TS 5
    Scenario: Status: Failed Interview
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as failed
        Then the status should be failed interview

    # TS 6
    Scenario: Status: Reject Failed Interview
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as failed
        And the user rejects the recruit
        Then the recruit should be rejecred

    #TS 7
    Scenario: Status: Reject Job Offer
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user rejects the recruit
        Then the recruit should be rejecred

    #TS 8
    Scenario: Status: Job Offer Declined
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user marks job offer as declined
        Then the status should be job offer declined

    #TS 9
    Scenario: Status: Reject Job Offer Declined
        Given the user is on the recruitment page
        When the user adds a new recruit
        And the user shortlists the recruit
        And the user schedules an interview with the recruit
        And the user marks the interview as passed
        And the user Offer's the recruit a job
        And the user marks job offer as declined
        And the user rejects the recruit
        Then the recruit should be rejecred