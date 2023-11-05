import { Link } from 'react-router-dom';

const style = {
	"backgroundColor":"gray",
	"padding":"20px",
	"margin":"5px",
}

const Header = () => {
	return (
		<header style={style}>
			<div>
				<Link to="/">
					Home
				</Link>
			</div>
		</header>
	)
}

export default Header