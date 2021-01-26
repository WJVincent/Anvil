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
  Creates a user and logs in that user if successful in its creation.

---

## Folder Routes

---

- ### `GET -> /api/folder/:id`

  Retrieves all of the notes contained in a specific folder.

- ### `POST -> /api/folder`

  Creates a new notebook associated with the logged in user.

- ### `PUT -> /api/folder/:id`

  Edits a preexisting notebook of the logged in user.

- ### `DELETE -> /api/folder/:id`

  Deletes a notebook associated with the logged in user

## Note Routes

---

- ### `GET -> /api/note/:id`

  Retrieves a specific note for the user.

- ### `POST -> /api/note/:id`

  Creates a new note in a specifc notebook

- ### `PUT -> /api/note/:id`
  Edit a specific note for the user.

---
