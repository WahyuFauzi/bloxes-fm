import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import FolderContext from './FolderContext';
import FileContext from './FileContext';
import MainContext from './MainContext.js';
import { setRenderConditionFalse } from '../../redux/contextSlice';

PlainContext.propTypes = {
	top: PropTypes.number,
	left: PropTypes.number,
};

export default function PlainContext(props) {
	const dispatch = useDispatch();

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

	const handleOnLeave = () => {
		dispatch(setRenderConditionFalse());
	};

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
			onMouseLeave={handleOnLeave}
		>
			{contextManager(selectedFile.type)}
		</div>
	);
}
