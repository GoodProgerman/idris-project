import { AnyAction, CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { authMiddleware } from '@/features/AuthByUsername';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>
) => {
	const rootReducer: ReducersMapObject<StateSchema, AnyAction> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducer);

	const extraArg: ThunkExtraArg = {
		api: $api,
	};

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, AnyAction>,
		preloadedState: initialState,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: extraArg,
				},
			}).concat(authMiddleware),
	});
	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
};
