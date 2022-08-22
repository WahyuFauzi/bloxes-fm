export default class UpdateFolderRequest {
	constructor(requestBody: any) {
		(this.folder_name = requestBody.folder_name),
			(this.nested_folders = requestBody.nested_folders),
			(this.items = requestBody.items);
	}
	folder_name: string;
	nested_folders: Array<string>;
	items: Array<string>;
}
