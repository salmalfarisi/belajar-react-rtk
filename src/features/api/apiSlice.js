import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { alluserData } from "../user/userSlice";
import { useState } from "react"; //gak boleh panggil ini di dalam slice!!

const URL = "https://jsonplaceholder.typicode.com/posts";

//ini juga bisa disebut sebagai function yg bisa diexport. running api berasa 2x code!! ada cara simpel ?
export const indexdata = createAsyncThunk("api/getData", async() => {
	try
	{
		const response = await axios.get(URL);
		return response.data;
	}
	catch(e)
	{
		return e.message;
	}
})

//tempat menyimpan data
const initialState = {
	// posts:[
	
		// {
			// "tes":"tes"
		// }
	// ],
	posts:[],
	status:"idle", //gak tau ini buat paan : idle | loading | succeeded | failed
	error:null
}

//contoh dummy update data. sementara gak disambung ke api dulu
export const updateData = createAsyncThunk('posts/updatePost', async(setdata) => {
	const { id } = setdata;
	return setdata;
	// try
	// {
		// const response = await axios.put(`${URL}/${id}`, setdata);
		// return response.data;
	// }
	// catch(err)
	// {
		// return err.message;;
	// }
})

export const apiSlice = createSlice(
	{
		name:'api',
		initialState,
		//ini untuk manajemen CRUD
		reducers:{
			updateData:
			{
				
			}
		},
		extraReducers:(builder) => {
			// switch function
			builder.addCase(indexdata.pending, (state,action) => {
				// console.log(state.api.status)
				// state.status = 'loading';
				state.status = indexdata.pending;
			});
			builder.addCase(indexdata.fulfilled, (state,action) => {
				// apabila api berjalan lancar
				state.status = 'succeeded';
				let start = 0;
				let writer = 0;
				// contoh pembuatan data dari frontend. kalo udah punya 
				// api sendiri harusnya gak perlu
				const dummydata = action.payload.map(postloop => {
					postloop.likes = start++;
					// postloop.userId
					// writer++;
					return postloop;
				});
				
				// hasil extra api dimasukkan ke dalam state
				state.posts = state.posts.concat(dummydata);
			});
			builder.addCase(indexdata.rejected, (state,action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
		},
	}
)

//inisialisasi data secara dinamis bisa via sini
//semua yang berhubungan dengan redux, namanya harus sama dengan nama file. termasuk nama variabelnya
//keknya salah disini
export const allData = (state) => state.api.posts;
export const statusData = (state) => state.api.status;
export const message = (state) => state.api.error;

//lakukan export agar function bisa digunakan
//export const { add, add2 } = postSlice.actions;

//select data by id
export const dataById = (state, id) => state.api.posts.find(post => post.id === id);

export default apiSlice.reducer;