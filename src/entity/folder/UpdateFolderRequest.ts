export default class UpdateFolderRequest {
	constructor(requestBody: any) {
		(this.folder_name = requestBody.folder_name),
			(this.nested_folders = requestBody.nested_folders),
			(this.files = requestBody.files);
	}
	folder_name: string;
	nested_folders: Array<string>;
	files: Array<string>;
}
