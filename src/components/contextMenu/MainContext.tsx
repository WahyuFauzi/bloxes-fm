import { showFolderNameInput } from '../../redux/currentSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setRenderConditionFalse } from '../../redux/contextSlice';
import stateHelper from '../../logic/stateHelper';
import { setItems } from '../../redux/currentSlice';

export default function MainContext() {
	const dispatch = useDispatch();
	const items = useSelector((state: any) => state.current.currentFolder.items);

	let inputElement;
	let fileUpload;

	const handlCreateFolderClick = () => {
		dispatch(showFolderNameInput());
		dispatch(setRenderConditionFalse());
	};

	const handleUploadFileClick = () => {
		inputElement.click();
		dispatch(setRenderConditionFalse());
	};

	const handleInputChange = (e) => {
		fileUpload = e.target.files[0];
		if (fileUpload !== undefined && fileUpload !== null) {
			stateHelper.uploadFile(fileUpload);
		}
	};

	return (
		<div className="w-full my-2">
			<ul className="w-full h-full">
				<li
					onClick={handlCreateFolderClick}
					className="w-full h-full cursor-pointer hover:bg-gray-600"
				>
					create folder
				</li>
				<li
					className="w-full h-full cursor-pointer hover:bg-gray-600"
					onClick={handleUploadFileClick}
				>
					upload file
					<div className="hidden">
						<label htmlFor="file-upload"></label>
						<input
							ref={(input) => (inputElement = input)}
							type="file"
							value={fileUpload}
							onChange={handleInputChange}
						/>
					</div>
				</li>
			</ul>
		</div>
	);
}
