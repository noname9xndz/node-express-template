const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Test API Documentation',
    description: 'This is a sample example of API documentation.',
    version,
    termsOfService: 'https://github.com',
    contact: {
          email: 'github@gmail.com'
        },
        license: {
          name: 'MIT',
          url: 'https://github.com'
        }
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
