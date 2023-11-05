//untuk import halaman. wajib mengikuti aturan penulisan REACT!!
import Counter from './features/counter/Counter';
import Post from './features/post/Post';
import AddpostForm from './features/post/AddpostForm';
import Api from './features/api/Api';
import PostById from './features/api/PostById';
import EditapiForm from './features/api/EditapiForm';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

// function App() {
  // return (
    // <main className="App">
		// <AddpostForm/>
		// <Api/>
	// </main>
  // );
// }

function App() {
  return (
    <Routes>
		{/* cara load halaman via route */}
		<Route path="/" element={ <Layout/> }>
			<Route index element={ <Api/> } />
			
			<Route path="data">
				<Route index element={ <AddpostForm/> } />
				<Route path=":id" element={ <PostById/> } />
				<Route path="edit/:id" element={ <EditapiForm/> } />
			</Route>
		</Route>
    </Routes>
  );
}

export default App;
