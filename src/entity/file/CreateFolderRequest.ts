export default class CreateFolderRequest {
	constructor(requestBody: any) {
		this.folder_name = requestBody.folder_name;
	}
	folder_name: string;
}
