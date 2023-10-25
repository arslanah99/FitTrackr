import { gql } from 'apollo-server';
import {db} from "../../server.ts"
const typeDefs = gql`
   type User {
        firstName: String
        lastName: String 
        email: String
   }   
   type Query {
        users : [User]
   }
`


// Define resolvers to handle GraphQL queries
const resolvers = {
  Query: {
    users: () => {
      return new Promise((resolve, reject) => {
        console.log('hello', resolve, reject);
        fetchAllUsers((data: unknown) => {
          resolve(data);
        });
      })
    },
  },
};
const fetchAllUsers = (callback: { (data: unknown): void; (arg0: any[]): any; }) => {
  db.collection('users')
    .get()
    .then((item) => {
         const items: any = [];
         item.docs.forEach(item => {
             items.push(item.data())
         });
    return callback(items);
  })
  .catch(e => console.log(e));
}


// const resolvers = {
//   Query: {
//      users: () => {
//         return new Promise((resolve, reject) => {
            //  fetchAllUsers((data: unknown) => {
            //      resolve(data);
            // });
//         });
//      }
//   }
// }// Function to fetch all users from database


// const typeDefs = gql`
//   type Query {
//     hello: String
//     emojis: [String]
//   }
//   type Mutation {
//     register(email: String!, password: String!): User
//   }
//   type User {
//     uid: String
//     email: String
//   }
// `;

// const Query: QueryResolvers = {
//   // hello: () => 'Hello, world!',
//   // emojis: async () => {
//   //   try {
//   //     const response = await axios.get('http://127.0.0.1:8083/fittracker-local123/us-central1/getEmojis');
//   //     return response.data;
//   //   } catch (error) {
//   //     console.error('Failed to fetch emojis:', error);
//   //     return [];
//   //   }
//   // },
// };

// const Mutation: MutationResolvers = {
//   // register: async (_: any, { email, password }: {email: string, password: string}) => {
//   //   try {
//   //     const response = await axios.post('http://127.0.0.1:8083/fittracker-local123/us-central1/register', {
//   //       email,
//   //       password,
//   //     });
//   //     return response.data;
//   //   } catch (error) {
//   //     console.error('Failed to register user:', error);
//   //     throw new Error('Failed to register user');
//   //   }
//   // },
// };

// const resolvers = { Query, Mutation };

export { typeDefs, resolvers };
