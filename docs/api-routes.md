# API Routes

---

DESCRIPTION GOES HERE

---

## Session Routes

---

- ### `GET -> /api/session`

  Returns the logged in user object if a user is logged in. Otherwise returns an empty object.

- ### `POST -> /api/session`

  Attemps to login a user based on the given form information. If successful, sets the user token.

- ### `DELETE -> /api/session`

  Clears the user token from the session to log out the user.

---

## User Routes

---

- ### `GET -> /api/user/:id`

  Retrieves the users notebooks and notes, so that they can be accessed by the logged in user.

- ### `POST -> /api/user`

---

## Notebook Routes

---

---

## Note Routes

---

---
