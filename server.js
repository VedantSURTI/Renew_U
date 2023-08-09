const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://dotslash6:dotslash6@cluster0.lj10xlv.mongodb.net/users?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB!");
  }
);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  password: String,
});

const User = mongoose.model("User", userSchema);


app.post("/", (req, res) => {
  let newuser = new User({
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    password: req.body.password,
  });

  newuser.save((err) => {
    console.log(__dirname);
    if (err) {
      console.log(err);
      res.status(500).send("Error saving user to database");
    } else {
      // res.status(200).send("user data stored");
      // localStorage.setItem("age", newuser.age);
      res.sendFile(__dirname + "/public/index1 LoggedIn.html");
      console.log(__dirname);
    }
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ username: username, password: password }, (err, user) => {
    if (err) {
      console.log(err);
      // res.status(500).send("Error logging in");
      res.sendFile(__dirname + "/public/fail.html");
    } else if (!user) {
      // res.status(404).send("User not found");
      res.sendFile(__dirname + "/public/fail.html");
    } else {
      // res.status(200).send("Logged in successfully");
      // res.sendFile(__dirname + "/public/dashboard/index.html");
      res.sendFile(__dirname + "/public/index1 LoggedIn.html");
      console.log(__dirname);
    }
    // localStorage.setItem("age", user.age);
  });
});

app.listen(3000, () => {
  console.log(`Connected to port 3000`);
});
