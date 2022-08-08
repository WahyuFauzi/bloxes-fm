import React from 'react';
import { store } from '@/redux/store';
import ContextViewModel from '@/components/contextMenu/ContextViewModel';

const logic = new ContextViewModel(store);

//TODO inspect why vite cant import redux store in nested folder deeper than this

export default function FileContext() {
	return (
		<div className="w-full my-2">
			<ul className="w-full h-full">
				<li
					className="w-full h-full cursor-pointer hover:bg-gray-600"
					onClick={logic.handleDeleteFileClick}
				>
					delete file
				</li>
			</ul>
		</div>
	);
}
