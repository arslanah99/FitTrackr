import { gql } from 'apollo-server';
import axios from 'axios';
import { QueryResolvers, MutationResolvers } from '../generated-types';  // <- Importing generated types

const typeDefs = gql`
  type Query {
    hello: String
    emojis: [String]
  }
  type Mutation {
    register(email: String!, password: String!): User
  }
  type User {
    uid: String
    email: String
  }
`;

const Query: QueryResolvers = {
  // hello: () => 'Hello, world!',
  // emojis: async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8083/fittracker-local123/us-central1/getEmojis');
  //     return response.data;
  //   } catch (error) {
  //     console.error('Failed to fetch emojis:', error);
  //     return [];
  //   }
  // },
};

const Mutation: MutationResolvers = {
  // register: async (_: any, { email, password }: {email: string, password: string}) => {
  //   try {
  //     const response = await axios.post('http://127.0.0.1:8083/fittracker-local123/us-central1/register', {
  //       email,
  //       password,
  //     });
  //     return response.data;
  //   } catch (error) {
  //     console.error('Failed to register user:', error);
  //     throw new Error('Failed to register user');
  //   }
  // },
};

const resolvers = { Query, Mutation };

export { typeDefs, resolvers };