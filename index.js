// Array
let courses = [
  {
    id: 1,
    name: "Softwares Engineering",
  },
  {
    id: 2,
    name: "Web Development",
  },
  {
    id: 3,
    name: "Database Management",
  },
];

const express = require("express");
const app = express();
require('dotenv').config();

// opens port
app.listen(process.env.PORT);

// All
app.get("/", (req, res) => {
  res.send(JSON.stringify(courses));
});

// Single
app.get("/courses/:id", (req, res) => {
  if (req.params.id > courses.length) {
      // Single not found
    // res.send("<h1>Hello</h1>");
    res.status(404).sendFile("./views/404.html", { root: __dirname });
  } else {
    res.send(JSON.stringify(courses[req.params.id - 1]));
  }
});

// if page is not found this will run
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

// const http = require("http");
// const fs = require("fs");
// const exp = require("constants");

// create server
// const server = http.createServer((req, res) => {
//   // header type
//   res.setHeader("Content-Type", "text/html");

//   let path = "./views/";
//   switch (req.url) {
//     case "/":
//       path += "courses.html";
//       break;

//     default:
//       path += "404.html";
//       res.statusCode = 404;
//   }

//   // displays file on path
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//         res.write(data)
//         res.write(JSON.stringify(courses))
//       res.end();
//     }
//   });
// });

// server.listen(3001, "localhost", () => {
//   console.log("Listening for requests on port 3001");
// });
