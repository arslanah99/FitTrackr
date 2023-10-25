import { gql } from "@apollo/client";

export const CREATE_WORKOUT_PLAN = gql`
  mutation CreateWorkoutPlan($input: WorkoutPlanInput!) {
    createWorkoutPlan(input: $input) {
      WeekNumber
      Focus
    }
  }
`;