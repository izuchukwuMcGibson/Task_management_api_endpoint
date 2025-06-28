# Task Management API

This is a simple RESTful API built with Node.js and Express for creating and retrieving tasks. It demonstrates basic backend patterns such as input validation, error handling, and RESTful design.
 Features

- Create new tasks (`POST /tasks`)
- Retrieve all tasks (`GET /tasks`)
- Retrieve a single task by ID (`GET /tasks/:id`)
- Includes basic input validation and clear error responses
- In-memory data storage (no database setup required)

 Getting Started (Run Locally)

 ✅ Requirements:
- Node.js 
- Git

 Installation Steps:

1. Clone the repository:

   git clone https://github.com/izuchukwuMcGibson/Task_management_api_endpoint.git
   cd Task_management_api_endpoint
2.Install dependencies:
   npm install
3. Start the server:
   node index.js
4. Your server should be running at:
   http://localhost:3000
Create a Task
URL: POST /tasks

Body (JSON):
{
  "title": "Learn Express",
  "description": "Study routing and middleware"
}
Example using cURL:

curl -X POST http://localhost:3000/tasks \
"Content-Type: application/json" \
'{"title": "Learn Express", "description": "Study routing and middleware"}'
 Get All Tasks
URL: GET /tasks

Example:
curl http://localhost:3000/tasks
📌 Get Task by ID
URL: GET /tasks/:id

Example:
curl http://localhost:3000/tasks/1
Validation & Error Handling
title is required, must be a non-empty string

description is optional, but if present, must be a string

Appropriate error messages and status codes (400, 404) are returned for:

1. Invalid input

2. Task not found

 Design Choices
1. In-memory array  was used so i can avoid database setup and keep the app lightweight 

2. Clear, human-readable error messages returned to help users understand what's wrong.

3. .trim() used to avoid titles like " "(empty string) being accepted.

4. CORS is enabled globally  to simplify testing 


