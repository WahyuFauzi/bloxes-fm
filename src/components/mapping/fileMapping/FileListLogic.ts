import { setSelectedFile } from '@/redux/axiosProcess';
import { setPosition, setRenderConditionTrue } from '@/redux/contextSlice';

export default class FileListLogic {
	constructor(store) {
		this.store = store;
	}
	store;

	handelContext = (e, item) => {
		e.preventDefault();
		e.stopPropagation();
		this.store.dispatch(
			setSelectedFile({
				id: item.id,
				type: 'file',
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
		console.log(item);
		this.store.dispatch(setPosition({ x: x, y: y }));
		this.store.dispatch(setRenderConditionTrue());
	};
}
