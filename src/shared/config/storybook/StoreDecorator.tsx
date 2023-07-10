import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addNewCommentReducer } from '@/features/AddNewComment/model/slice/addNewCommentSlice';
import { articleCommentsListReducer } from '@/features/ArticleCommentsList/model/slice/articleCommentsListSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/Profile/model/slice/profileSlice';
import { ReducersList } from '@/shared/lib/hooks/useDynamicModule/useDynamicModule';
import { articleCommentsReducer } from '@/widgets/ArticleComments/model/slice/articleCommentsSlice';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	articleCommentsList: articleCommentsListReducer,
	addNewComment: addNewCommentReducer,
	articleComments: articleCommentsReducer,
};

export const StoreDecorator =
	(state?: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) => {
		return (
			<StoreProvider
				initialState={state as StateSchema}
				asyncReducers={
					{ ...defaultAsyncReducers, ...asyncReducers } as ReducersMapObject<StateSchema>
				}
			>
				<Story />
			</StoreProvider>
		);
	};
