import express from 'express';
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  database: 'loyalty',
  password: 'smpdevelop'
})

connection.connect((err) => {
  if(err) {
    return console.error(err.message)
  } else {
    console.log('Подключение к MySQL установлено');
  }
})

const PORT = 5000;

const app = express();
app.use(express.json());

app.get('/', (req,res) => {
  res.status(200).json('fewfewf')
})

app.listen(PORT, () => console.log('SERVER STARTED'))