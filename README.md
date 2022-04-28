# simpleNodeCRUD

- A simple API REST (CRUD like) that allows you to manage notes (in memory, without using a database)
- Use [express](http://expressjs.com/) for routes
- To test the api you can download [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/) or similar applications
- The project contains some examples in the /requests/ folder to test locally using the [Visual studio code](https://code.visualstudio.com) extension [REST Client](https://github.com/Huachao/vscode-restclient) in conjunction with [Nodemon](https://nodemon.io/)

#Example calls

- Return all the notes
```javascript
GET http://localhost:3001/notes 
```

- Return the first note with id 1
```javascript
GET http://localhost:3001/notes/1 
```

- Delete the note with id 1 if it exists (does not check if exists)
```javascript
DELETE http://localhost:3001/notes/1 
```

- Add a note
```javascript
POST http://localhost:3001/notes
Content-Type: application/json

{
    "name":"esto es una nueva nota",
    "important":true
}
```
