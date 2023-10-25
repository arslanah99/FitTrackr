import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase/compat';
import { GET_WORKOUT_PLANS } from '../../queries/graphqlQueries';
import { CREATE_WORKOUT_PLAN } from '../../mutations/graphqlMutations';
import { useQuery, useMutation } from '@apollo/client';

const PowerBuildingScreen = () => {
  const [workouts, setWorkouts] = useState([]);
  
  // Apollo Client useQuery hook for fetching data
  const { loading, error, data } = useQuery(GET_WORKOUT_PLANS);
  
  // Apollo Client useMutation hook for mutations
  const [createWorkoutPlan] = useMutation(CREATE_WORKOUT_PLAN);
  
  useEffect(() => {
    const userId = firebase.auth().currentUser?.uid;
    
    if (userId) {
      const unsubscribe = firebase.firestore()
        .collection('Workouts')
        .where('userId', '==', userId)
        .onSnapshot(snapshot => {
          const fetchedWorkouts = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setWorkouts(fetchedWorkouts);
        });
        
      return () => unsubscribe();
    }
  }, []);

   useEffect(() => {
     const userId = firebase.auth().currentUser?.uid;
 
     // Auto-create a sample workout plan when component mounts
     const createSampleWorkout = async () => {
       try {
         await createWorkoutPlan({
           variables: {
             input: {
               WeekNumber: 1, // Sample Week Number
               Focus: "Strength Training" // Sample Focus
             }
           }
         });
         console.log("Sample workout plan created.ss");
       } catch (err) {
         console.error("Couldn't create sample workout plan:", err);
       }
     };
 
     createSampleWorkout();
 
     // ... your existing code
   }, []);
  
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  console.log("GraphQL Data:", data);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PowerBuilding Program</Text>
      {workouts.map(workout => (
        <Text key={workout.id}>{workout.workoutName}</Text>
      ))}

      {data?.getWorkoutPlans.map((plan, index) => (
        <Text key={index}>Week {plan.WeekNumber} - Focus: {plan.Focus}</Text>
      ))}
    </View>
  );
};

export default PowerBuildingScreen;
