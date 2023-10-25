import { ApolloServer, gql } from 'apollo-server';
import { db } from './firebase';
import { typeDefs, resolvers } from './graphql/schema'; 

// // Define the context type
interface MyContext {
  db: FirebaseFirestore.Firestore;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }): MyContext => ({
    db,
  }),
});

const port = 4001;

// Start the server
server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
