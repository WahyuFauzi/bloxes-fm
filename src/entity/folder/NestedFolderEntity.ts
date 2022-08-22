export default class NestedFolderEntity {
	constructor(id: string, folder_name: string) {
		this.id = id;
		this.folder_name = folder_name;
	}

	readonly id: string;
	readonly folder_name: string;
}
