import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { dataById, updateData } from "./apiSlice";
import { alluserData } from "../user/userSlice";

/*
	- css
	- load data dan routing web
*/

const EditapiForm = () => {
	const userlist = useSelector(alluserData);
	
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigasi = useNavigate();
	const loaddata = useSelector((state) => dataById(state, Number(id)));
	
	// const [title, setTitle] = useState(loaddata?.title);
	// const [description, setDescription] = useState(loaddata?.description);
	// const [userId, setUser] = useState(loaddata?.userId);
	const [title, setTitle] = useState(loaddata?.title);
	const [description, setDescription] = useState(loaddata?.description);
	const [userId, setUser] = useState(loaddata?.userId);
	const [process,setProccess] = useState('idle');
	
	if(loaddata === null || loaddata === undefined)
	{
		return (
			<div>
				<h3>Data not found</h3>
			</div>
		)
	}

	//inisialisasi function
	const ubahTitle = e => setTitle(e.target.value);
	const ubahDesc = e => setDescription(e.target.value);
	const ubahUser = e => setUser(e.target.value);
	
	// const ceksave = boolean(title) && boolean(description) && boolean(user);
	
	const listuser = 
	userlist.map(usersdata =>  (
		<option key={usersdata.id} value={usersdata.id}>
			{usersdata.name}
		</option>
	))
	
	const savedata = [title, description, userId].every(Boolean) && process === 'idle';
	
	//function submit
	const submitdata = () => {
		if(savedata)
		{
			try
			{
				setProccess('pending');
				dispatch(
					updateData({
						id:loaddata.id,
						title:title,
						description:description,
						userId:userId
					})
					// add({
						// id:nanoid(),
						// title,
						// description
					// })
				)
				
				setTitle('');
				setDescription('');
				setUser('');
				navigasi(`/data/${id}`);
			}
			catch(e)
			{
				console.log('error');
				console.log(e);
			}
			finally
			{
				setProccess('idle');
			}
		}
		else
		{
			alert("data not complete");
		}
	}
	
	return (
		<section>
			<form>
				<div>
					title
					<input type="text" id="title" name="title" value={title} onChange={ubahTitle} />
				</div>
				<div>
					description
					<textarea id="description" name="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
				</div>
				<div>
					user
					<select id="user" name="user" value={userId} onChange={e => setUser(e.target.value)}>
						<option value="" selected disabled>-- user --</option>
						{listuser}
					</select>
				</div>
				<button type="button" onClick={submitdata}>Save</button>
			</form>
		</section>
	)
}

export default EditapiForm;