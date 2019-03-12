# Storm Frontend Test – A Todo List Prototype

A test API, a pre-configured build system, and a series of tasks to complete.

## Practicalities

Please make a fork of this project for your work.

Each commit you make should relate to a single task. A more complex task may have many commits; this is up to you.

The app runs on Windows, macOS, and Linux under nodejs >= 8.11.3.

It can be built on the command line:

| What | How |
|-|-|
| set up | `npm i`
| run api and dev server | `npm start` |
| run unit tests | `npm t` |

We'll ask you to implement features task-by-task, but here is an overview of the full test API that you'll be building against:

The API runs on http://localhost:4000, the app runs on http://localhost:8080

| Action | Endpoint
|-|-|
| GET | /api/task
| GET | /api/task/<task.id>
| POST | /api/task
| PATCH | /api/task/<task.id>
| DELETE | /api/task/<task.id>

The build system is webpack-based (https://webpack.js.org/concepts) and includes support for SCSS (https://sass-lang.com/documentation/file.SASS_REFERENCE.html) and Jest (https://jestjs.io/) for any tests you may wish to write, but you are free to complete these tasks however you like.

## Tasks

| # | Description |
|-|-|
| 1 | Install dependencies, run the app and api, and have a play around |
| 2 | GET the list of Tasks from /api/task and render task titles to the page |
| 3 | Basing your UI on this wireframe sketch [wireframe sketch](img/wireframe.png), add an indication of the importance of each task using the importance property (0 = high, 1 = medium, 2 = low), and a placeholder element (perhaps a checkbox or button) to change the isDone property - you do not need to implement that functionality yet. |
| 4 | Add the Google Fonts webfont Roboto Light |
| 5 |  Run an accessibility test on your prototype - you can run an audit using Chrome Lighthouse in Chrome devtools (https://developers.google.com/web/tools/lighthouse/#devtools) - and make any necessary improvements. Your prototype should be AA compliant, and support keyboard input |
| 6 |  There is an artificial 500ms latency on all GET and POST API requests. Improve the user experience by adding  an indication of loading state to the UI |
| 7 | Implement the mechanism to mark a Task as done on the UI and PATCH /api/task/<task.id> so a change to the isDone property of a task persists on page reload |
| 8 | Add a form to create new tasks with title and importance level (values 0, 1, or 2) that POSTs to /api/task and updates the UI with the  task list. Both fields are required and should be validated on the client-side |
| 9 | Add a control to allow a user to delete a Task, making a DELETE request to /api/task/<task.id> and updating the UI; give consideration to the UI in the event that all tasks are deleted |

