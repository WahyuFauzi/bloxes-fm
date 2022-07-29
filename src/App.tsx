import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main.jsx';
import Layout from './components/Layout.jsx';
import stateHelper from './logic/stateHelper.js';

// TODO separate the logic from UI component

function App() {
	stateHelper.onInit();
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Layout>
	);
}

export default App;
