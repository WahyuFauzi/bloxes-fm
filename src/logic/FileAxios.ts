import axios from 'axios';

class FileAxios {
	fileUrl = 'http://localhost:3003/api/v1/item';

	postFile(newFile) {
		const uploadFile = {
			item_name: newFile.name,
			item_total_size: newFile.size,
		};
		return new Promise((resolve, reject) => {
			axios
				.post(`${this.fileUrl}`, uploadFile)
				.then((response) => {
					resolve(response.data.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	getFile(itemId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.fileUrl}/${itemId}`)
				.then((response) => {
					resolve(response.data.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	deleteFile(itemId) {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${this.fileUrl}/${itemId}`)
				.then((response) => {
					resolve(response.data.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const fileAxios = new FileAxios();

export default fileAxios;
