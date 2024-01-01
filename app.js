const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let movies = [
  { id: 1, title: 'Fight Club', director: 'David Fincher' },
  { id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
  
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.post('/movies', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
