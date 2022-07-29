import { useDispatch } from 'react-redux';
import Document from '../icon/document.jsx';
import { setSelectedFile } from '../../redux/axiosProcess';
import { setPosition, setRenderConditionTrue } from '../../redux/contextSlice';

function fileList(files) {
	const dispatch = useDispatch();

	const handelContext = (e, item) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(
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
		dispatch(setPosition({ x: x, y: y }));
		dispatch(setRenderConditionTrue());
	};

	return files.map((i, index) => {
		return (
			<div
				className="items flex-row w-32 h-32 m-2 cursor-pointer rounded ease-linear duration-100 hover:bg-gray-200"
				key={index}
				onContextMenu={(e) => {
					handelContext(e, i);
				}}
				onDoubleClick={(e) => {
					console.log(i);
				}}
			>
				<Document className="w-24 h-36 mx-auto" color="gray" />
				<p className="w-full text-center">{i.item_name}</p>
			</div>
		);
	});
}

export default fileList;
