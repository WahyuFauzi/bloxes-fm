import axios from 'axios';
import CreateFolderRequest from '../entity/folder/CreateFolderRequest';
import UpdateFolderRequest from '../entity/folder/UpdateFolderRequest';
import FolderEntity from "@/entity/folder/FolderEntity";
import NestedFolderEntity from "@/entity/folder/NestedFolderEntity";
import SampleFileEntity from "@/entity/file/NestedFileEntity";
import SampleUserEntity from "@/entity/user/SampleUserEntity";

class FolderAxios {
	private folderUrl = 'http://localhost:3003/api/v1/folder';

	createFolder(createFolderRequest: CreateFolderRequest) {
		return new Promise((resolve, reject) => {
			axios
				.post(this.folderUrl, createFolderRequest)
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.items,
						response.data.data.shared_user,
						response.data.data.created_at,
						response.data.data.updated_at
					)
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
				.get(`${this.folderUrl}/${folderId}`)
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.items,
						response.data.data.shared_user,
						response.data.data.created_at,
						response.data.data.updated_at
					)
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
				.put(`${this.folderUrl}/${folderId}`, updateFolderRequest)
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.items,
						response.data.data.shared_user,
						response.data.data.created_at,
						response.data.data.updated_at
					)
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
				.delete(`${this.folderUrl}/${folderId}`)
				.then((response) => {
					const data: FolderEntity = new FolderEntity(
						response.data.data.id,
						response.data.data.folder_name,
						response.data.data.nested_folders,
						response.data.data.items,
						response.data.data.shared_user,
						response.data.data.created_at,
						response.data.data.updated_at
					)
					resolve(data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const folderAxios = new FolderAxios();

export default folderAxios;
