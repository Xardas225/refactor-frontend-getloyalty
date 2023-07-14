import express from "express";
import mysql from "mysql2";
import cors from "cors";

const connection = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  database: "loyalty1",
  password: "smpdevelop",
});

connection.connect((err) => {
  if (err) {
    return console.error(err.message);
  } else {
    console.log("Подключение к MySQL установлено");
  }
});

const PORT = 5000;

const app = express();
app.use(express.json());

app.use(cors());

app.get("/api/profile", (_, res) => {
  connection.query(
    "SELECT * FROM user WHERE fk_company = 5",
    function (err, results) {
      if (err) {
        throw new Error(err);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

app.post("/api/profile", (req, res) => {
  console.log(req, res);
  res.status(200)
  // connection.query(
  //   "SELECT * FROM user WHERE fk_company = 5",
  //   function (err, results) {
  //     if (err) {
  //       throw new Error(err);
  //     } else {
  //       res.status(200).json(results);
  //     }
  //   }
  // );
});

app.listen(PORT, () => console.log("SERVER STARTED"));
