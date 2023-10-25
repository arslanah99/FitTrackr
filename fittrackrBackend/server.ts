import { ApolloServer, gql } from 'apollo-server';
import { typeDefs, resolvers } from './src/graphql/schema'; 
import * as admin from 'firebase-admin';
import dotenv from "dotenv";
dotenv.config();
// Initialize Firebase Admin SDK
admin.initializeApp({
  projectId: `${process.env.FIREBASE_PROJECT_ID}`,
});

const db = admin.firestore();
db.settings({
  host: 'localhost:8085',
  ssl: false,
});

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

export { db };