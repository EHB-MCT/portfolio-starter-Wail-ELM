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

/**
* Update via ID
 * @route 
 * @param {number} id.path 
 * @param {Movie.model} movie.body 
 * @returns {Movie.model} 
 */
app.put('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedMovie = req.body;
  
  /
  const index = movies.findIndex(movie => movie.id === id);

 -
  if (index !== -1) {
    movies[index] = { ...movies[index], ...updatedMovie };
    res.json(movies[index]);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

/**
 * 
 * @route
 * @param {number} id.path 
 * @returns {object} 
 */
app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  movies = movies.filter(movie => movie.id !== id);
  res.status(204).send();
});

// branch added
