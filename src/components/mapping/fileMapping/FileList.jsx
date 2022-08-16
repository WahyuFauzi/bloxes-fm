import Document from '../../../assets/icon/document';
import FileListLogic from './FileListLogic';
import { store } from '../../../redux/store';

const logic = new FileListLogic(store);

function fileList(files) {
	return files.map((i, index) => {
		return (
			<div
				className="items flex-row w-32 h-32 m-2 cursor-pointer rounded ease-linear duration-100 hover:bg-gray-200"
				key={index}
				onContextMenu={(e) => {
					logic.handelContext(e, i);
				}}
			>
				<Document className="w-24 h-36 mx-auto" color="gray" />
				<p className="w-full text-center">{i.item_name}</p>
			</div>
		);
	});
}

export default fileList;
