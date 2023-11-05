import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { allData } from "./postSlice";
import { add } from "./postSlice";

const User = () => {
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
			<h3>{datas.title}</h3>
			<textarea>{datas.description}</textarea>
		</article>
	))
	
	return (
		<section>
			<h2>List data</h2>
			{listdata}
		</section>
	)
}

export default User