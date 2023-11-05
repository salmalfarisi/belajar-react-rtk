import { useSelector } from 'react-redux';
import { alluserData } from './userSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
	const user = useSelector(alluserData);
	const listuser = user.map(loopdata => (
		<li key={loopdata.id}>
			<Link to={`/user/${loopdata.id}`}>{loopdata.name}</Link>
		</li>
	))
	
	return (
		<section>
			<h3>list user</h3>
			<ul>{listuser}</ul>
		</section>
	)
}

export default UserList