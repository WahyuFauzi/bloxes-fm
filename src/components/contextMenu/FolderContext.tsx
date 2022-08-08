import React from 'react';
import { store } from '@/redux/store';
import ContextViewModel from './ContextViewModel';

const logic = new ContextViewModel(store);

export default function FolderContext() {
	return (
		<div className="w-full my-2">
			<ul className="w-full h-full">
				<li
					className="w-full h-full cursor-pointer hover:bg-gray-600"
					onClick={logic.handleDeleteFolderClick}
				>
					delete folder
				</li>
			</ul>
		</div>
	);
}
