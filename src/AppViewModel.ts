import axiosHelper from '@/logic/axiosHelper';
import { setCurrentFolder, setPath } from '@/redux/currentSlice';

export default class AppViewModel {
	constructor(store) {
		this.store = store;
	}
	store;

	onInit() {
		const initFolderId = localStorage.getItem('init_folder_id');

		if (initFolderId === undefined || initFolderId === null) {
			axiosHelper.createFolder('init folder').then((response) => {
				localStorage.setItem('init_folder_id', response.data.data.id);
				this.store.dispatch(setPath([response.data.data.id]));
				this.store.dispatch(setCurrentFolder(response.data.data));
			});
		} else {
			axiosHelper.getFolder(initFolderId).then((response) => {
				this.store.dispatch(setPath([response.data.data.id]));
				this.store.dispatch(setCurrentFolder(response.data.data));
			});
		}
	}
}
