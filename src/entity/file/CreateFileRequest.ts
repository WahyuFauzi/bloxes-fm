export default class CreateFileRequest {
	constructor(folder_name, file_total_size) {
		this.file_name = folder_name;
		this.file_total_size = file_total_size;
	}
	file_name: string;
	file_total_size: number;
}
