require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors')
const db = require("./dbConnection");
const createUserRouter = require('./routers/createUser');
const authenticationRouter = require('./routers/authentication');


db.connect();
app.use(cors());
app.use(express.json());
app.use("/api", createUserRouter);
app.use("/api", authenticationRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`APP is listening on ${PORT}`);
});
