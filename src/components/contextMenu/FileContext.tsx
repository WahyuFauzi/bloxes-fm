import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderConditionFalse } from '../../redux/contextSlice';
import stateHelper from '../../logic/stateHelper';
export default function FileContext() {
	const dispatch = useDispatch();
	const selectedFile = useSelector(
		(state: any) => state.axiosProcess.selectedFile
	);

	const handleDeletedFileClick = () => {
		stateHelper.deleteFile(selectedFile.id);
		dispatch(setRenderConditionFalse());
	};

	return (
		<div className="w-full my-2">
			<ul className="w-full h-full">
				<li
					className="w-full h-full cursor-pointer hover:bg-gray-600"
					onClick={handleDeletedFileClick}
				>
					delete file
				</li>
			</ul>
		</div>
	);
}
