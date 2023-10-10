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

export type Day = {
  __typename?: 'Day';
  CompletionDate?: Maybe<Scalars['String']['output']>;
  DayNumber: Scalars['Int']['output'];
  DayType: Scalars['String']['output'];
  Exercises: Array<Exercise>;
  IsCompleted: Scalars['Boolean']['output'];
};

export type Exercise = {
  __typename?: 'Exercise';
  Info?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  Presets: Preset;
  Progress: Array<Scalars['String']['output']>;
  Substitutions: Array<Scalars['String']['output']>;
  UserInput: UserInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createWorkoutPlan?: Maybe<WorkoutPlan>;
};


export type MutationCreateWorkoutPlanArgs = {
  input?: InputMaybe<WorkoutPlanInput>;
};

export type Preset = {
  __typename?: 'Preset';
  OneRM?: Maybe<Scalars['String']['output']>;
  RPE: Scalars['Int']['output'];
  Reps: Scalars['String']['output'];
  Sets: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getWorkoutPlan?: Maybe<WorkoutPlan>;
};

export type RepSet = {
  __typename?: 'RepSet';
  set1?: Maybe<Scalars['Int']['output']>;
  set2?: Maybe<Scalars['Int']['output']>;
  set3?: Maybe<Scalars['Int']['output']>;
  set4?: Maybe<Scalars['Int']['output']>;
};

export type UserInput = {
  __typename?: 'UserInput';
  Date?: Maybe<Scalars['String']['output']>;
  Notes?: Maybe<Scalars['String']['output']>;
  Reps?: Maybe<Scalars['String']['output']>;
  Weight?: Maybe<Scalars['String']['output']>;
  repsAndSets: Array<RepSet>;
};

export type WorkoutPlan = {
  __typename?: 'WorkoutPlan';
  Days: Array<Day>;
  Focus: Scalars['String']['output'];
  WeekNumber: Scalars['Int']['output'];
};

export type WorkoutPlanInput = {
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
  Day: ResolverTypeWrapper<Day>;
  Exercise: ResolverTypeWrapper<Exercise>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Preset: ResolverTypeWrapper<Preset>;
  Query: ResolverTypeWrapper<{}>;
  RepSet: ResolverTypeWrapper<RepSet>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserInput: ResolverTypeWrapper<UserInput>;
  WorkoutPlan: ResolverTypeWrapper<WorkoutPlan>;
  WorkoutPlanInput: WorkoutPlanInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Day: Day;
  Exercise: Exercise;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Preset: Preset;
  Query: {};
  RepSet: RepSet;
  String: Scalars['String']['output'];
  UserInput: UserInput;
  WorkoutPlan: WorkoutPlan;
  WorkoutPlanInput: WorkoutPlanInput;
};

export type DayResolvers<ContextType = any, ParentType extends ResolversParentTypes['Day'] = ResolversParentTypes['Day']> = {
  CompletionDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  DayNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  DayType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Exercises?: Resolver<Array<ResolversTypes['Exercise']>, ParentType, ContextType>;
  IsCompleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Exercise'] = ResolversParentTypes['Exercise']> = {
  Info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Presets?: Resolver<ResolversTypes['Preset'], ParentType, ContextType>;
  Progress?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  Substitutions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  UserInput?: Resolver<ResolversTypes['UserInput'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createWorkoutPlan?: Resolver<Maybe<ResolversTypes['WorkoutPlan']>, ParentType, ContextType, Partial<MutationCreateWorkoutPlanArgs>>;
};

export type PresetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Preset'] = ResolversParentTypes['Preset']> = {
  OneRM?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  RPE?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Reps?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Sets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getWorkoutPlan?: Resolver<Maybe<ResolversTypes['WorkoutPlan']>, ParentType, ContextType>;
};

export type RepSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['RepSet'] = ResolversParentTypes['RepSet']> = {
  set1?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set2?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set3?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  set4?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserInputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInput'] = ResolversParentTypes['UserInput']> = {
  Date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Reps?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Weight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repsAndSets?: Resolver<Array<ResolversTypes['RepSet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkoutPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorkoutPlan'] = ResolversParentTypes['WorkoutPlan']> = {
  Days?: Resolver<Array<ResolversTypes['Day']>, ParentType, ContextType>;
  Focus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  WeekNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Day?: DayResolvers<ContextType>;
  Exercise?: ExerciseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Preset?: PresetResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RepSet?: RepSetResolvers<ContextType>;
  UserInput?: UserInputResolvers<ContextType>;
  WorkoutPlan?: WorkoutPlanResolvers<ContextType>;
};

