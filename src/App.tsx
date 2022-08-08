import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/Main.jsx';
import Layout from './components/Layout.jsx';
import { store } from '@/redux/store';
import AppViewModel from './AppViewModel.js';

const viewModel = new AppViewModel(store);

function App() {
	viewModel.onInit();
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</Layout>
	);
}

export default App;
