import { setCurrentFolder, setPath } from '@/redux/currentSlice';
import FolderEntity from '@/entity/folder/FolderEntity';
import responseToFolderEntity from '@/logic/responseToFolderEntity';
import CreateFolderRequest from './entity/folder/CreateFolderRequest';

export default class AppViewModel {
	constructor(store, folderAxios) {
		this.store = store;
		this.folderAxios = folderAxios;
	}

	store;
	folderAxios;

	onInit() {
		const initFolderId = localStorage.getItem('init_folder_id');

		if (initFolderId === undefined || initFolderId === null) {
			this.folderAxios
				.createFolder(new CreateFolderRequest('init_folder'))
				.then((data: any) => {
					localStorage.setItem('init_folder_id', data.id);
					this.store.dispatch(setPath([data.id]));
					this.store.dispatch(setCurrentFolder(responseToFolderEntity(data)));
				});
		} else {
			this.folderAxios.getFolder(initFolderId).then((data: any) => {
				this.store.dispatch(setPath([data.id]));
				this.store.dispatch(setCurrentFolder(responseToFolderEntity(data)));
			});
		}
	}
}
