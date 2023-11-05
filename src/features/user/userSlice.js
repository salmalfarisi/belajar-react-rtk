import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

//ini juga bisa disebut sebagai function yg bisa diexport. running api berasa 2x code!! ada cara simpel ?
export const indexdata = createAsyncThunk("api/getUser", async() => {
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
	users:[],
	status:"idle", //gak tau ini buat paan : idle | loading | succeeded | failed
	error:null
}

export const userSlice = createSlice(
	{
		name:'user',
		initialState,
		//ini untuk manajemen CRUD
		reducers:{
			
		},
		extraReducers:(builder) => {
			// switch function
			builder.addCase(indexdata.fulfilled, (state,action) => {
				// apabila api berjalan lancar
				state.status = 'succeeded';
				state.users = action.payload;
			});
		},
	}
)

//inisialisasi data secara dinamis bisa via sini
//semua yang berhubungan dengan redux, namanya harus sama dengan nama file. termasuk nama variabelnya
export const alluserData = (state) => state.user.users;

//lakukan export agar function bisa digunakan
//export const { add, add2 } = postSlice.actions;

export const pilihuser = (state, ids) => {
	state.users.find(user => user.id === ids)
};

export default userSlice.reducer;