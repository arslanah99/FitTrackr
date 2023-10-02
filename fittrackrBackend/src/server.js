// index.js: The entry point where we'll set up and start the Apollo Server.
const { ApolloServer } = require('apollo-server');
const db = require('./firebase');
const { typeDefs, resolvers } = require('./graphql/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*',
  },
});

server.listen({ host: '10.0.0.188', port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
