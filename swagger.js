// swagger.js branch
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movie API',
      version: '1.0.0',
    },
  },
  apis: ['app.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
