# Minimum Viable Product Feature List

1. Hosting on Heroku
2. User Authorization and Authentication
   - Users can sign up, log in, and log out.
   - Users can use a demo account to try out site features.
3. Notebooks
   - Users can create, edit, and delete notebooks.
   - Notebooks can contain any number of notes.
   - Notebooks belong to a category : can be filtered by category
4. Notes
   - Users can create, edit, and delete notes.
   - Rich text editing features.
   - Use react-QuillJS library for rich .txt file editing
   - Bonus: Use Code Mirror For in browser code editing.
   - Possibly save these files to aws web server.
5. Filters
   - Users can filter Notebooks by Category
   - Users can filter notes by Tag
   - Bonus: Users can filter notes & Notebooks by either createdAt or updatedAt dates
6. Search
   - Users can search their notes by name.
   - Bonus: Implement fuzzy search logic, maybe use the fuse.js library.
