import axios from 'axios';

class AxiosHelper {
	process = false;

	createFolder(folderName) {
		return new Promise((resolve, reject) => {
			axios
				.post('http://localhost:3003/api/v1/folder', {
					folder_name: folderName,
				})
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	getFolder(folderId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`http://localhost:3003/api/v1/folder/${folderId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	updateFolder(folderId, data) {
		return new Promise((resolve, reject) => {
			axios
				.put(`http://localhost:3003/api/v1/folder/${folderId}`, data)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	deleteFolder(folderId) {
		return new Promise((resolve, reject) => {
			axios
				.delete(`http://localhost:3003/api/v1/folder/${folderId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	postItem(newFile) {
		const uploadFile = {
			item_name: newFile.name,
			item_total_size: newFile.size,
		};
		return new Promise((resolve, reject) => {
			axios
				.post(`http://localhost:3003/api/v1/item`, uploadFile)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	getItem(itemId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`http://localhost:3003/api/v1/item/${itemId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	deleteFile(itemId) {
		return new Promise((resolve, reject) => {
			axios
				.delete(`http://localhost:3003/api/v1/item/${itemId}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const axiosHelper = new AxiosHelper();

export default axiosHelper;
