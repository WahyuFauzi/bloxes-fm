export default class SelectedItemEntity {
	constructor(id: string, file_type: string) {
		this.id = id;
		this.file_type = file_type;
	}

	id: string;
	file_type: string;
}
