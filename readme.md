# To-Do List Website

## Summary

An easy-to-use, single-page To-Do website created using HTML, CSS, and JavaScript.
The current iteration of this website does not persist data, so all tasks will be lost upon refresh.

## Operation

### Add new task

- Type a new task into the input field at the top.
- Confirm the new task using either the ENTER key or the "Add" button.

### Editing a task

- Double-click on an existing task text
- Enter a new task
- Confirm your new entry by either hitting ENTER or clicking outside the input area.

[Clearing the input field and confirming will leave the task unchanged.]

Completed tasks cannot be edited. This can be changed with the `ALLOW_EDITING_COMPLETED` variable in `assets/js/script.js`.

### Completing a task

- Hit the "Complete" button next to a task to complete it.
- The task will change colour.

### Deleting a task

- Hit the "Delete" button next to a task to delete it.
- Deleted tasks cannot be recovered.