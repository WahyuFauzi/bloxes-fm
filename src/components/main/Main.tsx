import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PlainContext from '../contextMenu/PlainContext';
import FolderList from '../mapping/folderMapping/FolderList.jsx';
import FileList from '../mapping/fileMapping/FileList.jsx';
import ArrowCircleLeft from '../../assets/icon/arrow-circle-left.jsx';
import MainViewModel from './MainViewModel';
import { store } from '../../redux/store';

const viewModel = new MainViewModel(store);

export default function Header() {
	const dispatch = useDispatch();
	const position = useSelector((state: any) => state.context.position);
	const folderNameInputClass = useSelector(
		(state: any) => state.current.folderInputCondition
	);
	const currentFolder = useSelector(
		(state: any) => state.current.currentFolder
	);

	//NOTE state in viewmodel not reactive
	const [folderName, setFolderName] = useState('');

	const handleInputChange = (e) => {
		setFolderName(e.target.value);
	};

	const handleOnInputClose = () => {
		viewModel.hideFolderNameInput();
	};

	const handleButtonOnClick = () => {
		viewModel.createFolder(folderName);
		viewModel.hideFolderNameInput();
	};

	const handleBackButtonClick = () => {
		viewModel.backToParentFolder();
	};

	const handleClick = (e) => {
		viewModel.handleContextMenu(e);
	};

	return (
		<div id="files" className="w-full h-full" onContextMenu={handleClick}>
			<div className="h-12 p-2">
				<div
					className="h-full w-8 cursor-pointer hover:bg-gray-300 rounded"
					onClick={handleBackButtonClick}
				>
					<ArrowCircleLeft classes="h-8 w-8" />
				</div>
			</div>
			<hr />
			<div className="select-none flex flex-wrap">
				{FolderList(currentFolder.nested_folders)}
				{FileList(currentFolder.items)}

				<PlainContext left={position.x} top={position.y} />

				<div className={folderNameInputClass}>
					<div
						className="w-full h-full opacity-60 bg-gray-800"
						onClick={handleOnInputClose}
					></div>
					<div className="h-32 flex-row w-96 top-1/3 left-1/3 absolute border bg-white border-black rounded shadow-md">
						<div className="w-3/4 h-2/4 mx-auto mt-2">
							<label htmlFor="folder-name"></label>
							<input
								className="w-full h-8 rounded-sm border border-black"
								type="text"
								value={folderName}
								placeholder="folder name"
								onChange={handleInputChange}
							/>
						</div>
						<div
							className="w-32 h-8 mx-auto rounded-sm bg-blue-500 hover:bg-blue-400"
							onClick={handleButtonOnClick}
						>
							<button className="w-full h-full">Create Folder</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
