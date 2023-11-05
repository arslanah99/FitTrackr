import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String 
    email: String
  }

  type Query {
    users: [User]
    getWorkoutPlan: WorkoutPlan
  }

  type Mutation {
    createWorkoutPlan(input: WorkoutPlanInput): WorkoutPlan
  }

  input WorkoutPlanInput {
    WeekNumber: Int!
    Focus: String!
  }

  type WorkoutPlan {
    WeekNumber: Int!
    Focus: String!
    Days: [Day!]!
  }

  type Day {
    DayNumber: Int!
    DayType: String!
    IsCompleted: Boolean!
    CompletionDate: String
    Exercises: [Exercise!]!
  }

  type Exercise {
    Name: String!
    Presets: Preset!
    Substitutions: [String!]!
    UserInput: UserInput!
    Progress: [String!]!
    Info: String
  }

  type Preset {
    Sets: Int!
    Reps: String!
    OneRM: String
    RPE: Int!
  }

  type UserInput {
    Reps: String
    Weight: String
    Notes: String
    Date: String
    repsAndSets: [RepSet!]!
  }

  type RepSet {
    set1: Int
    set2: Int
    set3: Int
    set4: Int
  }
`;

export { typeDefs };
