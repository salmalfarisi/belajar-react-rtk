import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { allData } from "./postSlice";
import { addLike } from "./postSlice";

const Post = () => {
	//data
	const data = useSelector(allData);
	const dispatch = useDispatch();

	//variable + crudnya
	//var [ incrementAmount, setIncrement ] = useState(0);
	
	//set variable kosong
	//const add = Number(incrementAmount) || 0;
	
	//contoh function
	// const resetData = () => {
		// setIncrement(0);
		// dispatch(resetvalue());
	// }
	
	const listdata = data.map(datas => (
		<article key={ datas.id }>
			<h3>{datas.title} | oleh { datas.userId }</h3>
			<textarea>{datas.description}</textarea>
			<h6>likes: {datas.likes}</h6>
			<button onClick={ () => dispatch(addLike(datas.id)) }>like</button>
		</article>
	))
	
	return (
		<section>
			<h2>List data</h2>
			{listdata}
		</section>
	)
}

export default Post