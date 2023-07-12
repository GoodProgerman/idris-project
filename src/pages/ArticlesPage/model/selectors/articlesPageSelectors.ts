import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slice/articlesPageSlice';

export const getArticlesIsLoading = (state: StateSchema) =>
	state.articlesPage?.isLoading || initialState.isLoading;

export const getArticlesError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesView = (state: StateSchema) => state.articlesPage?.view || initialState.view;
