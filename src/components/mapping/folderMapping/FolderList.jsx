import Folder from '../../../assets/icon/folder';
import { store } from '@/redux/store';
import FolderListLogic from './FolderListLogic';

const logic = new FolderListLogic(store);

function folderList(folders) {
	return folders.map((j, index) => {
		return (
			<div
				className="items flex-row w-32 h-32 m-2 cursor-pointer rounded ease-linear duration-100 hover:bg-gray-200"
				key={index}
				onContextMenu={(e) => {
					logic.handelContext(e, j);
				}}
				onDoubleClick={() => {
					logic.openFolder(j.id);
				}}
			>
				<Folder className="w-24 h-36 mx-auto" color="gray" />
				<p className="w-full text-center">{j.folder_name}</p>
			</div>
		);
	});
}
export default folderList;
