const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://homequest:homequest123@hqcluster.rcfgfsa.mongodb.net/hqMern?retryWrites=true&w=majority&appName=hqCluster";

async function connect() {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("DB Established");
    })
    .catch((e) => {
      console.log(e);
    });
}

module.exports = { connect };
