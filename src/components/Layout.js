import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<div>
			<Header/>
			<main className="App">
				{/* 
					katanya ini untuk inheritance anak dan cucu. 
					lebih tepatnya untuk autoload bagian component 
					yang bakal sering dipake contoh header dan footer 
				*/}
				<Outlet/>
			</main>
		</div>
	)
}

export default Layout