// const csv = require("csvtojson");
const fs = require("fs");
const uuidv1 = require('uuid/v1');
// csv()
//   .fromFile("./data/dataset/2017-2019-Data.csv")
//   .then(jsonObj => {
//     fs.writeFileSync("./data/dataset/dataset.json", JSON.stringify(jsonObj));
//   });

const data = require("./data/dataset/dataset.json")

data.map(val => {
  val.uid = uuidv1()
})

fs.writeFileSync("./data/dataset/dataset.json", JSON.stringify(data))