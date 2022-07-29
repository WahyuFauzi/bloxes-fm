import { useSelector, useDispatch } from 'react-redux';
import { setRenderConditionFalse } from '../../redux/contextSlice';
import stateHelper from '../../logic/stateHelper';

export default function FolderContext() {
	const dispatch = useDispatch();

	const selectedFolder = useSelector(
		(state: any) => state.axiosProcess.selectedFile
	);

	const handleDeleteFolderClick = () => {
		stateHelper.deleteFolder(selectedFolder.id);
		dispatch(setRenderConditionFalse());
	};

	return (
		<div className="w-full my-2">
			<ul className="w-full h-full">
				<li
					className="w-full h-full cursor-pointer hover:bg-gray-600"
					onClick={handleDeleteFolderClick}
				>
					delete folder
				</li>
			</ul>
		</div>
	);
}
