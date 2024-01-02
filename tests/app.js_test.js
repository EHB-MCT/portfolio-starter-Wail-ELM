const request = require('supertest');
const app = require('../app');

test('GET /movies should return a list of movies', async () => {
  const response = await request(app).get('/movies');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); 
});


test('PUT /movies/:id should update a movie', async () => {
    const updatedMovie = { title: 'Updated Movie', director: 'New Director' };
    const response = await request(app).put('/movies/1').send(updatedMovie);
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Updated Movie');
    expect(response.body.director).toBe('New Director');
  });
  
  test('DELETE /movies/:id should delete a movie', async () => {
    const response = await request(app).delete('/movies/1');
    expect(response.status).toBe(204);
  
    // Check if the movie is deleted
    const getResponse = await request(app).get('/movies');
    expect(getResponse.body).toHaveLength(1);
  });
  