const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: 'Family expenses control API',
      description: 'Welcome!',
    },
    host: 'localhost:3000',
    schemes: ['http'],
  };
  
// criar a pasta "swagger" manualmente na raiz do projeto
const outputFile = "swagger_output.json";
const endpointsFiles = ["./app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);