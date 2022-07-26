import axios from 'axios';
import { setFolder } from '../redux/currentSlice';

class AxiosHelper {
	//postUser() {}

	//getUser() {}

	createFolder(folderName) {
		axios.get('http://localhost:3003/api/v1/folder', {
			folder_name: folderName,
		});
	}

	deleteFolder(folderId) {
		axios.delete(`http://localhost:3003/api/v1/folder/${folderId}`);
	}

	uploadFile() {
		axios.post(`http://localhost:3003/api/v1/item`, {}); //TODO set data
	}

	downloadFile(itemId) {
		axios.get(`http://localhost:3003/api/v1/item/${itemId}`);
	}

	deleteFile(itemId) {
		axios.delete(`http://localhost:3003/api/v1/item/${itemId}`);
	}
}

const axiosHelper = new AxiosHelper();

export default axiosHelper;
