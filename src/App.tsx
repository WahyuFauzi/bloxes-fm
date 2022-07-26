import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main.jsx';
import Layout from './components/Layout.jsx';
import axiosHelper from './logic/axiosHelper.js';

function App() {
	axiosHelper.createFolder();
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Layout>
	);
}

export default App;
