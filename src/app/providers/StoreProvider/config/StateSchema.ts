import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUsername';
import { createReduxStore } from './store';
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ProfileSchema } from '@/entities/Profile';
import { AxiosInstance } from 'axios';

export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;

	// Async reducers
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema, AnyAction>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type StateSchemaKey = keyof StateSchema;
