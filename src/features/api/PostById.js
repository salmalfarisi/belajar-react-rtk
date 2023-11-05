import { useSelector } from 'react-redux';
import { dataById } from './apiSlice';
import { useParams } from 'react-router-dom';

const PostById = () => {
	const { id } = useParams();
	const data = useSelector((state) => dataById(state, Number(id)));
	
	if(data === null || data === undefined)
	{
		return(
			<section>
				<h2>Not Found</h2>
			</section>
		)
	}
	else
	{
		return(
			<article>
				<h3>{data.title}</h3>
				<textarea>{data.content}</textarea>
				<h6>Likes : { data.likes } </h6>
			</article>
		)
	}
}

export default PostById