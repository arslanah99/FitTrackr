import { gql, useMutation } from '@apollo/client';

const CREATE_WORKOUT_PLAN_MUTATION = gql`
  mutation CreateWorkoutPlan($input: WorkoutPlanInput!) {
    createWorkoutPlan(input: $input) {
      WeekNumber
      Focus
    }
  }
`;

// Use this hook in your component to call the mutation
export const useCreateWorkoutPlan = () => {
  const [mutate, { data, loading, error }] = useMutation(CREATE_WORKOUT_PLAN_MUTATION);

  const createWorkoutPlan = async (input: any) => {
    try {
      await mutate({ variables: { input } });
      console.log('you got mutated')
      // Handle successful mutation
    } catch (e) {
      // Handle error
      console.error('Error creating workout plan:', e);
    }
  };

  return { createWorkoutPlan, data, loading, error };
};
