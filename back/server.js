const express = require("express");
const { createPool } = require("mysql2");
const { resolve } = require("path");
const bodyParser = require("body-parser");
const { HOST, USER, PASSWORD, DB } = require("./config/db.config.js");

// Создание пула соединений
const pool_welbex = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 30,
});

//Создание сервер, подключение бодипарсера и раздача статики
const server = express();
server.use(bodyParser.json());
server.use(express.static(resolve(__dirname, "../front/build")));

//Подключение к реактовской сборке
server.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "../front/build/index.html"));
});

//Проверка связи с сервером
server.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//Проверка связи с базой
server.get("/connect", (req, res) => {
  pool.query("SELECT * FROM testtable", (err, result, fields) => {
    if (!err) {
      res.send("connect");
    } else {
      console.log(err);
    }
  });
});

//Загрузка данных с базы
server.get("/base", (req, res) => {
  pool_welbex.query("SELECT * FROM testtable", (err, result, fields) => {
    if (!err) {
      res.send(result);
    } else {
      console.log(err);
    }
  });
});

//Сообщение об ошибке
server.use((req, res) => {
  res.send("error");
});

//Запуск сервера
server.listen(3000, () => {
  console.log("http://localhost:3000");
});
