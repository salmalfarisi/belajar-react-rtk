import { Link } from "react-router-dom";

//ini gak tau buat paan
const ApiExcerpt = ({ api }) => {
	return(
		<article>
			<h3>{api.title}</h3>
			<textarea>{api.content}</textarea>
			<h6>Likes : { api.likes } </h6>
			<Link to={`data/${api.id}`}>detail</Link>
			<br/>
			<Link to={`data/edit/${api.id}`}>edit</Link>
		</article>
	)
}

export default ApiExcerpt