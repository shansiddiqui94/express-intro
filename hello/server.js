const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

// when I call the express (app var), I am attaching the listening method, in the port I want this and the other port my console.log
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello there!");
// }); //this is called server side rendering

//whenever an HTTP request is sent to http://localhost:3000/
//call the handler fucntion app.get and return "Hello there!"

//what is NodeMon
//Nodemon is an auto start, will automatically do the changes for you. So you constantly restart the server or make changes, NODEMON does it for you.
app.get("/", (req, res) => {
  res.send("Hey Welcome to my Webpage");
});

app.get("/favorite=food", (req, res) => {
  res.send("My favorite food is Biryani");
});

app.get("/favorite-movie", (req, res) => {
  res.send("Interstellar");
});

app.get("/auto-bio", (req, res) => {
  res.send(
    "Hello my name is Shan Siddiqui, I am part of TKH web development program."
  );
});

app.get("/contact", (req, res) => {
  res.send({
    phone: "347-299-5860",
    email: "JackalHigh@PBS.org",
  });
});
