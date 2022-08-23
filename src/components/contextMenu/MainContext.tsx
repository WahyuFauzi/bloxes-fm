import { store } from '@/redux/store';
import ContextViewModel from '@/components/contextMenu/ContextViewModel';

const logic = new ContextViewModel(store);

export default function MainContext() {
	let inputElement;
	let fileUpload;

	const handleUploadFileClick = () => {
		inputElement.click();
		logic.setRenderConditionFalse();
	};

	return (
		<div className="w-full my-2">
			<ul className="w-full h-full">
				<li
					onClick={logic.handlCreateFolderClick}
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
							onChange={logic.handleInputChange}
						/>
					</div>
				</li>
			</ul>
		</div>
	);
}
