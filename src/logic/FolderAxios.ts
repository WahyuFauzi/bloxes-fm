import axios from 'axios';
import CreateFolderRequest from '../entity/folder/CreateFolderRequest';
import UpdateFolderRequest from '../entity/folder/UpdateFolderRequest';
import FolderEntity from '@/entity/folder/FolderEntity';

class FolderAxios {
	private folderUrl = 'http://localhost:3003/api/v1/folder';

	createFolder(createFolderRequest: CreateFolderRequest) {
		return new Promise((resolve, reject) => {
			axios
				.post(this.folderUrl, {
					folder_name: createFolderRequest.folder_name,
				})
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.files,
						response.data.data.shared_user,
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

	getFolder(folderId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.folderUrl}/?folderId=${folderId}`)
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.files,
						response.data.data.shared_user,
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

	updateFolder(folderId, updateFolderRequest: UpdateFolderRequest) {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.folderUrl}/?folderId=${folderId}`, {
					folder_name: updateFolderRequest.folder_name,
					nested_folders: updateFolderRequest.nested_folders,
					files: updateFolderRequest.files
				})
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.files,
						response.data.data.shared_user,
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

	deleteFolder(folderId) {
		return new Promise((resolve, reject) => {
			axios
				.delete(`${this.folderUrl}/?folderId=${folderId}`)
				.then((response) => {
					resolve({
						data: response.data.data,
					});
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const folderAxios = new FolderAxios();

export default folderAxios;
