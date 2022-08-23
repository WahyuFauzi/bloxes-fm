import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import FolderContext from './FolderContext';
import FileContext from '@/components/contextMenu/FileContext';
import MainContext from './MainContext';
import { store } from '@/redux/store';
import ContextViewModel from '@/components/contextMenu/ContextViewModel';

const logic = new ContextViewModel(store);

PlainContext.propTypes = {
	top: PropTypes.number,
	left: PropTypes.number,
};

export default function PlainContext(props) {
	const selectedFile = useSelector(
		(state: any) => state.axiosProcess.selectedFile
	);
	const renderCondition = useSelector(
		(state: any) => state.context.renderCondition
	);

	let classes;

	if (renderCondition === true) {
		classes = 'rounded-md text-white bg-gray-800 text-center';
	} else {
		classes = 'hidden';
	}

	const contextManager = (type: string) => {
		switch (type) {
			case 'file':
				return <FileContext />;
			case 'folder':
				return <FolderContext />;
			default:
				return <MainContext />;
		}
	};

	return (
		<div
			className={classes}
			style={{
				position: 'absolute',
				width: 140,
				top: props.top,
				left: props.left,
			}}
			onMouseLeave={logic.setRenderConditionFalse}
		>
			{contextManager(selectedFile.type)}
		</div>
	);
}
