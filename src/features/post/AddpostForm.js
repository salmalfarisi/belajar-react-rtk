import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, add2 } from "./postSlice";
import { alluserData } from "../user/userSlice";

const AddpostForm = () => {
	const userlist = useSelector(alluserData);
	
	const dispatch = useDispatch();
	
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [userId, setUser] = useState('');

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
	
	//function submit
	const submitdata = () => {
		if(title === "" || description === "" || userId === "")
		{
			alert("data not complete");
		}
		else
		{
			dispatch(
				// add({
					// id:nanoid(),
					// title,
					// description
				// })
				add2(title, description, userId)
			)
			
			setTitle('');
			setDescription('');
			setUser('');
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

export default AddpostForm;