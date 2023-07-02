import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

export const initialState: ProfileSchema = {
	data: undefined,
	formData: undefined,
	isLoading: false,
	error: undefined,
	readonly: true,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state) => {
			state.readonly = !state.readonly;
		},
		cancelEdit: (state) => {
			state.formData = state.data;
			state.readonly = true;
		},
		setFormData: (state, action: PayloadAction<Profile>) => {
			state.formData = { ...state.formData, ...action.payload };
		},
	},
	extraReducers(builder: ActionReducerMapBuilder<ProfileSchema>) {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true;
				state.data = undefined;
				state.formData = undefined;
				state.error = undefined;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
				state.readonly = true;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
