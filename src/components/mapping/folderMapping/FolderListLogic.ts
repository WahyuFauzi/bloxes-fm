import { setSelectedFile } from '../../../redux/axiosProcess';
import {
	setPosition,
	setRenderConditionTrue,
} from '../../../redux/contextSlice';

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
}