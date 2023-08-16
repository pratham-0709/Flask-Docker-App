const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./schema/typeDefs")
const { resolvers } = require("./schema/resolvers");
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.use(cors(),bodyParser.json()); // enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });


