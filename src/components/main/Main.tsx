import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlainContext from '../contextMenu/PlainContext';
import FolderList from '../mapping/FolderList.jsx';
import FileList from '../mapping/FileList.jsx';
import { setSelectedFile } from '../../redux/axiosProcess';
import { setPosition, setRenderConditionTrue } from '../../redux/contextSlice';

export default function Header() {
	const dispatch = useDispatch();
	const position = useSelector((state: any) => state.context.position);
	const files = useSelector((state: any) => state.current.currentFolder.items);
	const folders = useSelector(
		(state: any) => state.current.currentFolder.nested_folders
	);

	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(
			setSelectedFile({
				id: '',
				type: '',
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

	return (
		<div
			id="files"
			className="w-full h-full select-none flex flex-wrap"
			onContextMenu={handleClick}
		>
			{FolderList(folders)}
			{FileList(files)}

			<PlainContext left={position.x} top={position.y} />
		</div>
	);
}
