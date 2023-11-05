import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// import { add, add2 } from "./postSlice";

const AddapiForm = () => {
	const dispatch = useDispatch();
	
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	//inisialisasi function
	const ubahTitle = e => setTitle(e.target.value);
	const ubahDesc = e => setDescription(e.target.value);
	
	//function submit
	const submitdata = () => {
		dispatch(
			
		)
		
		setTitle('');
		setDescription('');
	}
	
	return (
		<section>
			
		</section>
	)
}

export default AddpostForm;