let express = require("express");
let bodyParser = require("body-parser");
let app = express();

data = { message: "Hello json" };
// // middleware:
app.use("/public", express.static(__dirname + "/public"));

// console.log("Hello World");

// app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

// app.get("/", (req, res) => res.send("Hello Express"));

// // sending json resposes:
// app.get("/json", (req, res) => {
//   res.send({ message: "Hello json" });
// });

// // .env file:
// app.get("/json", (req, res) => {
//   data["message"] =
//     process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
//   console.log(data);
//   res.send(data);
// });

// // task: middleware
// app.use((req, res, next) => {
//   console.log("I'm a middleware...");
//   next();
// });

//task: req method , path and ip of the request:
// app.use(function (req, res, next) {
//   console.log(req.method + " " + req.path + " - " + req.ip);
//   next();
// });
// app.get("/json", (req, res) => {
//   res.send({ message: "Hello json" });
// });

//task: chaining middleware: and time server:
// app.get(
//   "/now",
//   (req, res, next) => {
//     req.time = new Date().toString();
//     next();
//   },
//   (req, res) => {
//     res.json({ time: req.time });
//   },
// );

// //task: echo server: and route parameters:
// app.get("/:word/echo", (req, res) => {
//   // echo = req.params.echo;
//   word = req.params.word;
//   res.json({ echo: word });
// });

//task: query parameters: and chaining differet http methods:
// app
//   .route("/name")
//   .get((req, res) => {
//     res.json({ name: req.query.first + " " + req.query.last });
//   })
//   .post((req, res) => {
//     res.json({ name: req.query.first + " " + req.query.last });
//   });

//task: body parser and urlencodinng:
// app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//   res.send();
// });

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/name", (req, res) => {
  res.json({ name: req.body.first + " " + req.body.last });
  res.send();
});

module.exports = app;
