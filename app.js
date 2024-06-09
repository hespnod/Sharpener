const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

const adminRoute = require("./routes/adminroutes");
const sequelize = require("./util/database");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use("/admin", adminRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log('error is -> ',err);
  });
