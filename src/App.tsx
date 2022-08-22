import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Main from './components/main/Main.jsx';
import Pinned from './components/pinned/Pinned.js';
import Recyclebin from './components/recycleBin/RecycleBin.js';
import { store } from '@/redux/store';
import AppViewModel from './AppViewModel.js';
import folderAxios from "@/logic/FolderAxios";

const viewModel = new AppViewModel(store, folderAxios);

function App() {
	viewModel.onInit();
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				{/*<Route path="/pinned" element={<Pinned />} />*/}
				{/*<Route path="/recyclebin" element={<Recyclebin />} />*/}
			</Routes>
		</Layout>
	);
}

export default App;
