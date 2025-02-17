const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for frontend access

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start(); // Ensure server starts before applying middleware
  server.applyMiddleware({ app });

  const PORT = 4000; // Hardcoded port instead of using .env
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
