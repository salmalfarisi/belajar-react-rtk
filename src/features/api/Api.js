import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { allData, statusData, message, indexdata } from "./apiSlice";
// import { add } from "./apiSlice";
import ApiExcerpt from "./ApiExcerpt";

const Api = () => {
	//data
	const data = useSelector(allData);
	const response = useSelector(statusData);
	const error = useSelector(message);
	const dispatch = useDispatch();
	
	useEffect( () => {
		if(response === "idle")
		{
			dispatch(indexdata());
		}
	},[response, dispatch]);
	
	let loadpage;
	if(response === 'loading')
	{
		loadpage = <p>"loading"</p>;
	}
	else if(response === "succeeded")
	{
		const responsedata = data;
		loadpage = responsedata.map(loopresult => <ApiExcerpt key={loopresult.id} api={loopresult}/>);
	}
	else if(response === "error")
	{
		loadpage = <p>{error}</p>;
	}
	
	return (
		<section>
			<h2>List data</h2>
			{loadpage}
		</section>
	)
}

export default Api