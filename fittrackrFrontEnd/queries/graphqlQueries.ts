import { gql } from '@apollo/client';

export const GET_WORKOUT_PLANS = gql`
  query GetWorkoutPlans {
    getWorkoutPlans {
      WeekNumber
      Focus
    }
  }
`;
