import axios from 'axios';
import UpdateFileRequest from '@/entity/file/UpdateFileRequest';
import FileEntity from '@/entity/file/FileEntity';
import CreateFileRequest from '@/entity/file/CreateFileRequest';
import DeletedResponse from '@/entity/DeletedResponse';

class FileAxios {
	fileUrl = 'http://localhost:3003/api/v1/file';

	postFile(createFileRequest: CreateFileRequest) {
		console.log(createFileRequest);
		return new Promise((resolve, reject) => {
			axios
				.post(`${this.fileUrl}`, {
					file_name: createFileRequest.file_name,
					file_total_size: createFileRequest.file_total_size,
				})
				.then((response) => {
					const data: FileEntity = new FileEntity(
						response.data.data.id,
						response.data.data.file_name,
						response.data.data.file_total_size,
						response.data.data.created_at,
						response.data.data.updated_at
					);
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	getFile(fileId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.fileUrl}/${fileId}`)
				.then((response) => {
					const data: FileEntity = new FileEntity(
						response.data.data.id,
						response.data.data.file_name,
						response.data.data.file_total_size,
						response.data.data.created_at,
						response.data.data.updated_at
					);
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	updateFile(fileId: string, updateFileRequest: UpdateFileRequest) {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.fileUrl}/${fileId}`, {
					file_name: updateFileRequest.file_name
				})
				.then((response) => {
					const data: FileEntity = new FileEntity(
						response.data.data.id,
						response.data.data.file_name,
						response.data.data.file_total_size,
						response.data.data.created_at,
						response.data.data.updated_at
					);
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	deleteFile(fileId: string) {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${this.fileUrl}/${fileId}`)
				.then((response) => {
					const data: DeletedResponse = new DeletedResponse(response.data.data);
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const fileAxios = new FileAxios();

export default fileAxios;
