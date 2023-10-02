// schema.js: File containing GraphQL type definitions (typeDefs) and resolvers.
const { gql } = require('apollo-server');
const axios = require('axios');

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

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    emojis: async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8083/fittracker-local123/us-central1/getEmojis');
        console.log(response);
        return response.data; // Assuming the emojis are returned as an array in the response data
      } catch (error) {
        console.error('Failed to fetch emojis:', error);
        return [];
      }
    },
  },
  Mutation: {
    register: async (_, { email, password }) => {
      try {
        const response = await axios.post('http://127.0.0.1:8083/fittracker-local123/us-central1/register', {
          email,
          password,
        });
        return response.data;
      } catch (error) {
        console.error('Failed to register user:', error);
        throw new Error('Failed to register user');
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
