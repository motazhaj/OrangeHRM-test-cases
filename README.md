# Cypress Test Cases for opensource OrangeHRM demo site

## Project Setup

```
Cypress 13.4.0
Typescript 5.2.2
Cypress Cucumber Preprosser 4.3.1
```

## Testing the recruitment page paths

### Positive paths

- Status: Application Initiated
- Status: Shortlisted
- Status: Interview Scheduled
- Status: Interview Passed
- Status: Job Offered
- Status: Hired

### Negative paths

- Status: Reject Initiated
- Status: Reject Shortlist
- Status: Reject Interview Scheduled
- Status: Reject Interview Passed
- Status: Failed Interview
- Status: Reject Failed Interview
- Status: Reject Job Offer
- Status: Job Offer Declined
- Status: Reject Job Offer Declined

## Add User test cases

- Adding a valid user
- Trying to add an invalid user
- Canceling with a valid user

## Encountered Issues

- this is not a good site to test on as it doesn't have unique identifiers for it's elements
- another point why this site is bad for testing is the fact that everyone is testing on the same site and the data keeps changing and getting deleted making the correct tests fail more often than not
- this workflow doens't have up to date documentation and i had to do a lot of trial and error to get things working(and the setup is not finished yet)

## To Do

- File configuration to work with the file structure of cypress/e2e/step-defenitions/"featurename"/"featurename".{ts,js}
