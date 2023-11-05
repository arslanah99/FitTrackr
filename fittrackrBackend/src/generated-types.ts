import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DayInput = {
  CompletionDate?: InputMaybe<Scalars['String']['input']>;
  DayNumber: Scalars['Int']['input'];
  DayType: Scalars['String']['input'];
  Exercises: Array<ExerciseInput>;
  IsCompleted: Scalars['Boolean']['input'];
};

export type ExerciseInput = {
  Info?: InputMaybe<Scalars['String']['input']>;
  Name: Scalars['String']['input'];
  Presets: PresetInput;
  Progress: Array<Scalars['String']['input']>;
  Substitutions: Array<Scalars['String']['input']>;
  UserInput: UserInputInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWorkoutPlan?: Maybe<WorkoutPlan>;
};


export type MutationCreateWorkoutPlanArgs = {
  input?: InputMaybe<WorkoutPlanInput>;
};

export type PresetInput = {
  OneRM?: InputMaybe<Scalars['String']['input']>;
  RPE: Scalars['Int']['input'];
  Reps: Scalars['String']['input'];
  Sets: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getWorkoutPlan?: Maybe<WorkoutPlan>;
};

export type RepSetInput = {
  set1?: InputMaybe<Scalars['Int']['input']>;
  set2?: InputMaybe<Scalars['Int']['input']>;
  set3?: InputMaybe<Scalars['Int']['input']>;
  set4?: InputMaybe<Scalars['Int']['input']>;
};

export type UserInputInput = {
  Date?: InputMaybe<Scalars['String']['input']>;
  Notes?: InputMaybe<Scalars['String']['input']>;
  Reps?: InputMaybe<Scalars['String']['input']>;
  Weight?: InputMaybe<Scalars['String']['input']>;
  repsAndSets: Array<RepSetInput>;
};

export type WorkoutPlan = {
  __typename?: 'WorkoutPlan';
  Days: Array<DayInput>;
  Focus: Scalars['String']['output'];
  WeekNumber: Scalars['Int']['output'];
};

export type WorkoutPlanInput = {
  Days: Array<DayInput>;
  Focus: Scalars['String']['input'];
  WeekNumber: Scalars['Int']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DayInput: DayInput;
  ExerciseInput: ExerciseInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PresetInput: PresetInput;
  Query: ResolverTypeWrapper<{}>;
  RepSetInput: RepSetInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserInputInput: UserInputInput;
  WorkoutPlan: ResolverTypeWrapper<WorkoutPlan>;
  WorkoutPlanInput: WorkoutPlanInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  DayInput: DayInput;
  ExerciseInput: ExerciseInput;
  Int: Scalars['Int']['output'];
  Mutation: {};
  PresetInput: PresetInput;
  Query: {};
  RepSetInput: RepSetInput;
  String: Scalars['String']['output'];
  UserInputInput: UserInputInput;
  WorkoutPlan: WorkoutPlan;
  WorkoutPlanInput: WorkoutPlanInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createWorkoutPlan?: Resolver<Maybe<ResolversTypes['WorkoutPlan']>, ParentType, ContextType, Partial<MutationCreateWorkoutPlanArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getWorkoutPlan?: Resolver<Maybe<ResolversTypes['WorkoutPlan']>, ParentType, ContextType>;
};

export type WorkoutPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkoutPlan'] = ResolversParentTypes['WorkoutPlan']> = {
  Days?: Resolver<Array<ResolversTypes['DayInput']>, ParentType, ContextType>;
  Focus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  WeekNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  WorkoutPlan?: WorkoutPlanResolvers<ContextType>;
};

