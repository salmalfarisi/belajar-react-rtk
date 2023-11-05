import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import postSlice from '../features/post/postSlice';
import userSlice from '../features/user/userSlice';
import apiSlice from '../features/api/apiSlice';

//tempat menyimpan function yang telah dibuat
export const store = configureStore(
	{
		//cara manggil banyak state management
		reducer:
		{
			counter: counterSlice,
			post:postSlice,
			user:userSlice,
			api:apiSlice,
		}
	}
)