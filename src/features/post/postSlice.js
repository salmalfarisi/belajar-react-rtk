import { createSlice, nanoid } from "@reduxjs/toolkit";

//tempat menyimpan data
const initialState = [
	{
		id:1,
		title:'slide 1',
		description:'hello slide 1',
		likes:0
	},
	{
		id:2,
		title:'slide 2',
		description:'hello slide 2',
		likes:0
	}
]

export const postSlice = createSlice(
	{
		name:'post',
		initialState,
		//ini untuk manajemen CRUD
		reducers:{
			add2:
			{
				reducer(state, action)
				{
					state.push(action.payload)
				},
				prepare(title, description, userId)
				{
					return {
						payload:
						{
							id:nanoid(),
							title,
							description,
							userId,
							likes:0
						}
					}
				}
			},
			//salah satu function reducer standar
			add(state, action)
			{
				state.push(action.payload)
			},
			addLike(state, action)
			{
				const {id, target} = action.payload;
				alert(action.payload)
				const getdata = state.find(post => post.id === id);
				if(getdata)
				{
					getdata.likes += 1
				}
				else
				{
					alert("error");
				}
			}
		}
	}
)

//inisialisasi data secara dinamis bisa via sini
//semua yang berhubungan dengan redux, namanya harus sama dengan nama file. termasuk nama variabelnya
export const allData = (state) => state.post;

//lakukan export agar function bisa digunakan
export const { add, add2, addLike } = postSlice.actions;

export default postSlice.reducer;