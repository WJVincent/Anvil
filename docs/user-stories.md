# User Stories

---

## 1. Login

**As an authorized user I want to be able to login to the website and access my information.**

---

### Questions

- Will the user enter a username or an email to login?
  - Users will be able to login with either their email or their password.
- What route will be used to login?
  - The route to login will be POST /api/session
- Where will the user be redirected after login?
  - The user will be redirected to "/" after a successful login.
- What will happen if the user doesn't exist?
  - The user will be given a display of relevant error messages and an option to sign up instead.

### Acceptance Criteria

- **Given** that I'm a logged out user.
  - **When** I access the login route
    - **Then** a login form will be rendered for me to fill out.
  - **When** I fill out the form with invalid information.
    - **Then** I will recieve relevant error messages.
    - **And** I will be given the option to create an account instead.
  - **When** I fill out the form with valid information.
    - **Then** I will be redirected to the home page and see my data.
- **Given** that I am a logged in user.
  - **When** I refresh page
    - **Then** I will remain logged in.
- **Given** that I am an unauthorized user.
  - **When** I am at the "/login" route
    - **Then** I will be given the option to create an account.
    - **And** I will be given the option to login as a demo user.

---

## 2. Signup

**As an unauthorized user I want to be able to make an account with the website to be able to access its features.**

---

### Questions

- What information will a user need to provide to register an account?
  - Users will need to provide a username, an email, and a password.
- What requirements will the username have?
  - A username cannot be null, must be between 4-15 characters, and must be unique
- What requirements will the email have?
  - An email cannot be null, must be no longer than 30 characters, must be a valid email address, and must be unique
- What requirements will the password have?
  - A password cannot be null, must be at least 8 characters, at least one number, lowercase letter, uppercase letter, and symbol
- Will the user be redirected after signup?
  - The user will be redirected to the home page.

### Acceptance Criteria

- **Given** that I'm a user who has not signed up yet and
  - **When** I click on the signup button in the NavBar
    - **Then** there will be a form that pops up with an email, username, and password field with a button to submit the form.
- **Given** that I'm a user trying to make an account,
  - **When** I try to fill out the form with an email or username that already exists
    - **Then** at the top of the form, I will see a message "This account information already exists, would you like to sign in or supply different credentials?".
- **Given** that I'm a user trying to make an account,
  - **When** I try to fill out the form with a password shorter than 8 characters, doesn't have an uppercase letter, doesn't have a lowercase letter, doesn't have a number, or doesn't have a symbol.
    - **Then** at the top of the form, I will see a message "Password must be at least 8 characters, contain at least one upper and lower case letter, a number, and a symbol."
- **Given** that I'm a user trying to make an account,
  - **When** I try to fill out the form with a valid email, username, and password and press Enter or press the "Register" button,
    - **Then** I will be redirected to the home page with access to create notes and notebooks
- **Given** that I'm a user that just signed up
  - **When** I refresh the page
    - **Then** I will still be logged in

## 3. Logout

**As an authorized user, I want to be able to log out of my account, so that I can hide my account information from the rest of the users on this device.**

### Questions

- What happens when the user logs out?
  - User will be redirected to the / page with a message at the top telling them the log out was successful.
- How will the user log out?
  - User will click the Log out button in the User menu that is accessible from the NavBar on any page of the site.

### Acceptance Criteria

- Given that I'm a logged-in user and
  - When I'm on any route
    Then I should be able to access the user menu in the NavBar and log out of my account
- Given that I'm a logged-in user and
  - When I click the Log out button
    Then I will be redirected back to the / page.

## 4. Notebooks

### Questions

### Acceptance Criteria

## 5. Notes

### Questions

### Acceptance Criteria

## 6. Filters

### Questions

### Acceptance Criteria

## 7. Search

### Questions

### Acceptance Criteria
