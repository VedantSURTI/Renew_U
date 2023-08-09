const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 4000;

app.use(express.static("public2"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index3.html");
});

app.get("/public2/style.css", function (req, res) {
  res.set("Content-Type", "text/css");
  res.sendFile(__dirname + "/public2/style.css");
});

app.get("/public2/client.js", function (req, res) {
  res.set("Content-Type", "text/javascript");
  res.sendFile(__dirname + "/public2/client.js");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
