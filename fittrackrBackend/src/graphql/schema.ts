import {db} from "../../server.ts"
import { typeDefs } from './typeDefs.ts';


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
  Mutation: {
    createWorkoutPlan: async (_: any, { input }: any, { db }: any) => {
      try {
        // Create a new workout plan document in Firestore
        const workoutPlanRef = db.collection('WorkoutPlans').doc();
        await workoutPlanRef.set({
          WeekNumber: input.WeekNumber,
          Focus: input.Focus,
          Days: input.Days // Assuming you're passing Days as an array of DayInput
        });

        // Here you might want to read the data back from Firestore
        // or just return the input as is, depending on your needs
        const workoutPlan = await workoutPlanRef.get();
        if (!workoutPlan.exists) {
          throw new Error('Failed to create workout plan.');
        }
        console.log('worked')
        return workoutPlan.data();
      } catch (error: any) {
        throw new Error('Error creating workout plan: ' + error.message);
      }
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

export { typeDefs, resolvers };
