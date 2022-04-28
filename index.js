/*
const http = require("http");
const notes = [
  {
    name: "a1",
  },
  {
    name: "a5",
  },
  {
    name: "a3",
  },
];
const serverCallback = (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" }); //response header
  response.end(JSON.stringify(notes));
};
const app = http.createServer(serverCallback);
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
*/
const express = require("express");
const app = express();
app.use(express.json());
let notes = [
  { name: "n1", id: 1, important: false, date: new Date().toISOString() },
  { name: "n2", id: 2, important: false, date: new Date().toISOString() },
  { name: "n3", id: 3, important: false, date: new Date().toISOString() },
  { name: "n4", id: 4, important: false, date: new Date().toISOString() },
];
const serverCallbackHelloWorld = (request, response) => {
  response.send("hello world");
};
const serverCallbackNotes = (request, response) => {
  response.send(notes);
};
const serverCallbackNote = (request, response) => {
  const params = request.params;
  const note = notes.find((n) => {
    return n.id.toString() === params.id;
  });
  if (note) response.send(note);
  else response.status(404).end();
};
const serverCallbackNoteDelete = (request, response) => {
  const params = request.params;
  notes = notes.filter((n) => {
    return n.id.toString() !== params.id;
  });
  response.status(200).end(); //no content
};
const serverCallbackNotePost = (request, response) => {
  const newNote = {
    id:
      Math.max(
        ...notes.map((n) => {
          return n.id;
        })
      ) + 1,
    important: request.body.important ? true : false,
    name: request.body.name,
    date: new Date().toISOString(),
  };
  notes.push(newNote);
  response.json(newNote);
};
app.get("/", serverCallbackHelloWorld);
app.get("/notes", serverCallbackNotes);
app.get("/notes/:id", serverCallbackNote);
app.delete("/notes/:id", serverCallbackNoteDelete);
app.post("/notes", serverCallbackNotePost);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
