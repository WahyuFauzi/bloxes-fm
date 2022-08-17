export default class SelectedItemEntity {
	constructor(id: string, fileType: string) {
		this.id = id;
		this.fileType = fileType;
	}

	id: string;
	fileType: string;
}
