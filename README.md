# Fosclass Notes Api
Simple CRUD notes app with MySQL Database Fosclass Programming Final Submission.

**Content**
- [Setup](#Setup)
- [Project Structure](#Project-Structure)
- [Request and Responses](#Request-and-Responses)
- [Testing](#Testing)
- [Depedencies](#Depedencies)

## Instruction
1. Open file `src/controllers/notes.js` then replace commented `/* @todo comments */` with your own code to have output like [Request and Responses](#Request-and-Responses) section.
   ```js
   // const Note = require('../models/note')
   const responses = require('../constants/responses')
   const apiResponse = require('../helpers/response-helper')
   
   const getNotes = async (req, res) => {
     try {
       /**
        * @todo Write your code here
        */
     } catch (error) {
       return apiResponse(res, responses.error.code, 'Error retrieving notes')
     }
   }
   
   const getNote = async (req, res) => {
     try {
       /**
        * @todo Write your code here
        */
     } catch (error) {
       return apiResponse(res, responses.error.code, 'Error retrieving note')
     }
   }
   
   const createNote = async (req, res) => {
     try {
       /**
        * @todo Write your code here
        */
     } catch (error) {
       return apiResponse(res, responses.error.code, 'Error creating note')
     }
   }
   
   const updateNote = async (req, res) => {
     try {
       /**
        * @todo Write your code here
        */
     } catch (error) {
       return apiResponse(res, responses.error.code, 'Error updating note')
     }
   }
   
   const deleteNote = async (req, res) => {
     try {
       /**
        * @todo Write your code here
        */
     } catch (error) {
       return apiResponse(res, responses.error.code, 'Error deleting note')
     }
   }
   
   module.exports = {
     getNotes,
     getNote,
     createNote,
     updateNote,
     deleteNote
   }
   ```
2. To make sure your output code as expected, you can test api with Postman with importing environment and collections json files on [Testing](#Testing) section.
3. If you want to change database configuration, open file `src/config/database.js` like below.
   ```js
   module.exports = {
     development: {
       username: 'root',
       password: null,
       database: 'notes_db',
       host: '127.0.0.1',
       dialect: 'mysql'
     },
     test: {
       username: 'root',
       password: null,
       database: 'notes_db',
       host: '127.0.0.1',
       dialect: 'mysql'
     },
     production: {
       username: 'root',
       password: null,
       database: 'notes_db',
       host: '127.0.0.1',
       dialect: 'mysql'
     }
   }
   ```
4. To get know what the request method from the API, you can start by opening file `routes/api.js`.
   ```js
   const { Router } = require('express')
   const {
     getNotes,
     getNote,
     createNote,
     updateNote,
     deleteNote
   } = require('../controllers/notes')
   
   const router = Router()
   router.get('/notes', getNotes)
   router.get('/notes/:id', getNote)
   router.post('/notes', createNote)
   router.put('/notes/:id', updateNote)
   router.delete('/notes/:id', deleteNote)
   
   module.exports = router
   ```
5. To complete this submission you can use Sequelize Model that include on this project at directory `src/models` to Retrieve, Insert, Update, and Delete data from MySQL table.
6. You can use `apiResponse()` helper function from directory `src/helpers/response-helper.js` to construct JSON response from Model retrieved data.
   ```js
   const apiResponse = (response, statusCode, message, data) => {
     return response.status(statusCode).json({
       status: statusCode,
       message,
       data
     })
   }
   
   module.exports = apiResponse
   ```
8. If you cannot complete this submission by using MySQL and Sequelize, you can make your own Model to store notes data temporary on variable that presistent while this Node JS API running.

## Setup
1. Install all depedencies by running `npm` command
   ```sh
   npm install
   ```
2. Create MySQL database with name `notes_db`
   ```sql
   CREATE DATABASE notes_db;
   ```
3. Run database migration using command below
   ```sh
   npm run migrate
   ```

## Project Structure
```sh
fosclass-notesapi
├── .eslintrc.json
├── .gitignore
├── .sequelizerc
├── index.js
├── package-lock.json
├── package.json
├── postman
│   ├── Fosclass Notes Api.postman_collection.json
│   └── Fosclass Notes Api.postman_environment.json
└── src
    ├── config
    │   └── database.js
    ├── constants
    │   └── responses.js
    ├── controllers
    │   └── notes.js
    ├── database
    │   └── sequelize.js
    ├── helpers
    │   └── response-helper.js
    ├── migrations
    │   └── 20231128075856-create_notes_table.js
    ├── models
    │   └── note.js
    ├── routes
        └── api.js
```

## Start Application
1. Starting on development mode
   ```sh
   npm run dev
   ```
2. Starting on production mode
   ```sh
   npm start
   ```

## Request and Responses
* **[GET]** /api/notes \
  **Request :**
  ```sh
  curl http://localhost:3000/api/notes
  ```

  **Response :**
  ```json
  {
    "status": 200,
    "message": "Notes retrieved successfully",
    "data": [
        {
            "id": "e171b52a-2e95-409c-8635-a2da42ef92ff",
            "title": "My Note",
            "content": "This is my first note",
            "createdAt": "2023-11-28T09:59:31.000Z",
            "updatedAt": "2023-11-28T09:59:31.000Z"
        }
    ]
  }
  ```
* **[GET]** /api/notes/:id \
  **Request :**
  ```sh
  curl http://localhost:3000/api/notes/e171b52a-2e95-409c-8635-a2da42ef92ff
  ```

  **Response :**
  ```json
  {
    "status": 200,
    "message": "Note retrieved successfully",
    "data": {
        "id": "e171b52a-2e95-409c-8635-a2da42ef92ff",
        "title": "My Note",
        "content": "This is my first note",
        "createdAt": "2023-11-28T09:59:31.000Z",
        "updatedAt": "2023-11-28T09:59:31.000Z"
    }
  }
  ```
* **[POST]** /api/notes \
  **Request :**
  ```sh
  curl -H "Content-Type: application/json" \
    -X POST http://localhost:3000/api/notes \
    -d '{"title": "My Note", "content": "This is my first note"}'
  ```

  **Response :**
  ```json
  {
    "status": 201,
    "message": "Note created successfully",
    "data": {
        "id": "42362a8e-1141-464b-8a27-f993dcdde5d5",
        "title": "My Note",
        "content": "This is my first note",
        "createdAt": "2023-11-28T10:07:04.274Z",
        "updatedAt": "2023-11-28T10:07:04.274Z"
    }
  }
  ```
* **[PUT]** /api/notes/:id \
  **Request :**
  ```sh
  curl -H "Content-Type: application/json" \
    -X PUT http://localhost:3000/api/notes/42362a8e-1141-464b-8a27-f993dcdde5d5 \
    -d '{"title": "Updated note title", "content": "This is updated note content"}'
  ```

  **Response :**
  ```json
  {
    "status": 201,
    "message": "Note created successfully",
    "data": {
        "id": "42362a8e-1141-464b-8a27-f993dcdde5d5",
        "title": "My Note",
        "content": "This is my first note",
        "createdAt": "2023-11-28T10:07:04.274Z",
        "updatedAt": "2023-11-28T10:07:04.274Z"
    }
  }
  ```
* **[DELETE]** /api/notes/:id \
  **Request :**
  ```sh
  curl -H "Content-Type: application/json" \
    -X DELETE http://localhost:3000/api/notes/42362a8e-1141-464b-8a27-f993dcdde5d5
  ```

  **Response :**
  ```json
  {
    "status": 200,
    "message": "Note deleted successfully",
    "data": {
        "id": "42362a8e-1141-464b-8a27-f993dcdde5d5"
    }
  }
  ```

## Testing
Import Postman environment and collection then run the test, below is the files location:
- `"postman/Fosclass Notes Api.postman_collection.json"`
- `"postman/Fosclass Notes Api.postman_environment.json"`

## Depedencies
- [Express JS](https://expressjs.com)
- [Sequelize ORM](https://sequelize.org)
