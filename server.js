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

server.post("/visual", async (req, res) => {
  const data = require("./data/dataset/dataset.json");
  const { year, brgy, sex, age } = req.body;
  let resultSet = [];
  const unique = [
    ...new Set(
      data
        .filter(
          val =>
            val.year == parseInt(year) &&
            (brgy == "all" ? brgy != "" : brgy == val.barangay) &&
            (sex == "all" ? sex != "" : sex == val.sex) &&
            (age == "all" ? age != "" : age == val.age)
        )
        .map(item => item.disease)
    )
  ];

  unique.map(unique_code => {
    let caseCount = 0;
    data
      .filter(
        val =>
          val.year == parseInt(year) &&
          (brgy == "all" ? brgy != "" : brgy == val.barangay) &&
          (sex == "all" ? sex != "" : sex == val.sex) &&
          (age == "all" ? age != "" : age == val.age)
      )
      .map(tempMap => {
        if (tempMap.disease == unique_code) {
          caseCount += tempMap.cases;
        }
      });
    resultSet.push({ disease_code: unique_code, cases: caseCount });
  });

  res.json(
    resultSet
      .sort(function(a, b) {
        return b.cases - a.cases;
      })
      .slice(0, 10)
  );
});

server.post("/prediction", async (req, res) => {
  const data = require("./data/dataset/dataset.json");
  const { year } = req.body;
});

server.post("/map/info", async (req, res) => {

});

server.post("/dataset/get", async (req, res) => {
  const data = require("./data/dataset/dataset.json");
  const { year, brgy, sex, age, disease_code } = req.body;
  res.json(
    data.filter(
      val =>
        val.year == parseInt(year) &&
        val.barangay == brgy &&
        val.sex == sex &&
        val.age == age &&
        val.disease == disease_code
    )
  );
});

server.post("/dataset/new", async (req, res) => {
  const data = require("./data/dataset/dataset.json");
  const { year, brgy, sex, age, disease_code, cases } = req.body;

});
server.put("/dataset/", async (req, res) => {});
server.delete("/dataset/", async (req, res) => {});


// Serve the static files from the React app
server.use(express.static(path.join(__dirname, "client/calabarzon/build")));

// Handles any requests that don't match the ones above
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/calabarzon/build/index.html"));
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
