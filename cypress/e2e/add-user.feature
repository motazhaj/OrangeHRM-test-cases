Feature: Add user page

    Scenario: Adding a valid user
        Given the user is on the Add User page as an admin
        When the user selects Admin in the User Role input
        And the user selects Enabled in the Status Input
        And the user types valid Employee Name in the Employee Name input
        And the user types username "Test2023" in the Username field
        And the user types password "Admin123@" in password
        And the user types password "Admin123@" in confim password
        And the user click on the Save Button
        Then an added succesfully message appears
        And the user is redirected to the admin managmenet page
