import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './components/main/Main';
import AppViewModel from '@/AppViewModel';
import { store } from '@/redux/store';
import folderAxios from '@/logic/FolderAxios';

const viewModel = new AppViewModel(store, folderAxios);

function App() {
	viewModel.onInit();
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				{/*<Route path="/pinned" element={<Pinned />} />
				<Route path="/recyclebin" element={<Recyclebin />} />*/}
			</Routes>
		</Layout>
	);
}

export default App;
