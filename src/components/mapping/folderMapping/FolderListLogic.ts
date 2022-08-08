import { setSelectedFile } from '../../../redux/axiosProcess';
import {
	setPosition,
	setRenderConditionTrue,
} from '../../../redux/contextSlice';
import axiosHelper from '@/logic/axiosHelper.js';
import { setCurrentFolder, setPath } from '@/redux/currentSlice';

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
		console.log(`${x} dan ${y}`);
		this.store.dispatch(setPosition({ x: x, y: y }));
		this.store.dispatch(setRenderConditionTrue());
	};

	openFolder(folderId) {
		const currentPath = this.store.getState().current.currentPath;
		const parsedCurrentPath = JSON.parse(JSON.stringify(currentPath));
		parsedCurrentPath.push(folderId);
		this.store.dispatch(setPath(parsedCurrentPath));
		axiosHelper.getFolder(folderId).then((response) => {
			const newCurrentFolder = {
				id: response.data.data.id,
				folder_name: response.data.data.folder_name,
				nested_folders: response.data.data.nested_folders,
				items: response.data.data.items,
			};
			this.store.dispatch(setCurrentFolder(newCurrentFolder));
		});
	}
}
