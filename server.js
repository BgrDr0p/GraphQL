const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const utilisateurSchema = require('./schemas/schema');
const server = express();


server.use('/GraphQL', graphqlHTTP({
  graphiql:true,
  schema: utilisateurSchema
}));

server.listen(4000,() => {
  console.log('Serveur en écoute sur le port 4000');
});

 