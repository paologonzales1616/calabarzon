require("dotenv").config();
const fs = require("fs");
const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 5000;
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(logger("dev"));

server.post("/auth", async (req, res) => {
  const admin_username = process.env.ADMIN_USERNAME;
  const admin_password = process.env.ADMIN_PASSWORD;
  const { username, password } = req.body;
  if (username == admin_username && password == admin_password) {
    return res.json({
      account_type: "admin"
    });
  }
  const accounts = require("./data/accounts/accounts.json");
  const indexTest = accounts.findIndex(
    acc => acc.username == username && acc.password == password
  );
  if (indexTest < 0) {
    return res.json({
      status: "fail"
    });
  }
  return res.json({
    index: indexTest,
    status: "success",
    account_type: "user"
  });
});

server.get("/accounts", async (req, res) => {
  const accounts = require("./data/accounts/accounts.json");
  res.json(accounts);
});

server.delete("/accounts", async (req, res) => {
  const { userIndex } = req.body;
  console.log(userIndex);
  const accounts = require("./data/accounts/accounts.json");
  accounts.splice(userIndex, 1);
  fs.writeFileSync("./data/accounts/accounts.json", JSON.stringify(accounts));
  return res.json({
    message: "success"
  });
});

server.post("/accounts", async (req, res) => {
  const { username, password, brgy } = req.body;
  const accounts = require("./data/accounts/accounts.json");
  accounts.push({
    username,
    password,
    brgy
  });
  fs.writeFileSync("./data/accounts/accounts.json", JSON.stringify(accounts));
  return res.json({
    message: "success"
  });
});

server.put("/accounts", async (req, res) => {
  const { index, password } = req.body;
  const accounts = require("./data/accounts/accounts.json");
  accounts[index].password = password;
  fs.writeFileSync("./data/accounts/accounts.json", JSON.stringify(accounts));
  return res.json({
    message: "success"
  });
});

server.get(
  "/dataset/:year/:brgy/:sex/:age/:disease_code",
  async (req, res) => {
    const data = require("./data/dataset/dataset.json");
    const { year, brgy, sex, age, disease_code } = req.params;
    res.json(
      data.filter(
        val =>
          val["Year"] == year &&
          val["barangay"] == brgy &&
          val["sex"] == sex &&
          val["age"] == age &&
          val["disease"] == disease_code
      )
    );
  }
);

// Serve the static files from the React app
server.use(express.static(path.join(__dirname, "client/calabarzon/build")));

// Handles any requests that don't match the ones above
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/calabarzon/build/index.html"));
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
