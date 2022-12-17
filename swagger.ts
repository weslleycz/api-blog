import swaggerAutogen from 'swagger-autogen';

const outputFile = './src/swagger/swagger.json'
const endpointsFiles = ['./src/routes.ts']

swaggerAutogen(outputFile, endpointsFiles)