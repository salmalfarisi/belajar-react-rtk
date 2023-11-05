import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, resetvalue, incrementbyamount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	alert(count);
	const dispatch = useDispatch();
	
	var [ incrementAmount, setIncrement ] = useState(0);
	
	const add = Number(incrementAmount) || 0;
	
	const resetData = () => {
		setIncrement(0);
		dispatch(resetvalue());
	}
	
	return (
		<section>
			<center>
				<p>{count}</p>
				<div>
					<button onClick={ () => dispatch(increment()) }> + </button>
					<button onClick={ () => dispatch(decrement()) }> - </button>
				</div>
				
				<input type="text" value={incrementAmount} onChange={ (e) => setIncrement(e.target.value) } />
				<div>
					<button onClick={ () => dispatch(incrementbyamount(add)) }> submit </button>
					<button onClick={ resetData }> reset </button>
				</div>
			</center>
		</section>
	)
}

export default Counter