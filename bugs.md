
# BUGS

- BUG #1 : PATCH /users/:username does not allow for current user updates.

- BUG #2 : User.authenticated not awaited in /auth/login.

- BUG #3 : PATCH /users/:username allows for username and admin updates.

- BUG #4 : authUsers not verifying token for signature.