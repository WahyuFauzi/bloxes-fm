import { setSelectedFile } from '@/redux/axiosProcess';
import { setPosition, setRenderConditionTrue } from '@/redux/contextSlice';
import folderAxios from '@/logic/FolderAxios';
import { setCurrentFolder, setPath } from '@/redux/currentSlice';
import FolderEntity from '@/entity/folder/FolderEntity';

export default class FolderListLogic {
	constructor(store) {
		this.store = store;
	}
	store;

	handelContext = (e, folder) => {
		e.preventDefault();
		e.stopPropagation();
		this.store.dispatch(
			setSelectedFile({
				id: folder.id,
				type: 'folder',
			})
		);
		let x;
		let y;
		e.pageX + 120 > window.innerWidth
			? (x = window.innerWidth - 140)
			: (x = e.pageX);
		e.pageY + 80 > window.innerHeight
			? (y = window.innerHeight - 90)
			: (y = e.pageY - 20);
		this.store.dispatch(setPosition({ x: x, y: y }));
		this.store.dispatch(setRenderConditionTrue());
	};

	openFolder(folderId) {
		const currentPath = this.store.getState().current.currentPath;
		const parsedCurrentPath = JSON.parse(JSON.stringify(currentPath));
		parsedCurrentPath.push(folderId);
		this.store.dispatch(setPath(parsedCurrentPath));
		folderAxios.getFolder(folderId).then((data: any) => {
			const newCurrentFolder = new FolderEntity(
				data.id,
				data.folder_name,
				data.nested_folders,
				data.items,
				data.shared_user,
				data.created_at,
				data.updated_at
			);
			this.store.dispatch(setCurrentFolder(newCurrentFolder));
		});
	}
}
