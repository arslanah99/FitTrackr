import { ApolloServer } from 'apollo-server';
import { db } from './firebase'; // Import db from firebase.ts
import { typeDefs, resolvers } from './graphql/schema'; 

// Define the context type
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

server.listen({ host: '10.0.0.188', port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
