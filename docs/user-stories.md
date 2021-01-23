# User Stories

## Login

### Questions

- Will the user enter a username or an email to login?
  - User will be able to login with either their email or their password.
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

## Signup

### Questions

### Acceptance Criteria

## Logout

### Questions

### Acceptance Criteria

## Notebooks

### Questions

### Acceptance Criteria

## Notes

### Questions

### Acceptance Criteria

## Filters

### Questions

### Acceptance Criteria

## Search

### Questions

### Acceptance Criteria
