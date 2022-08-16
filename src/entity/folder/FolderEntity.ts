export default class FolderEntity {
	constructor(
		id: string,
		folder_name: string,
		nested_folders: Array<string>,
		items: Array<string>,
		shared_user: Array<string>,
		created_at: string,
		updated_at: string
	) {
		this.id = id;
		this.folder_name = folder_name;
		this.nested_folders = nested_folders;
		this.items = items;
		this.sharedUser = shared_user;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	readonly id: string;
	readonly folder_name: string;
	readonly nested_folders: Array<string>;
	readonly items: Array<string>;
	readonly sharedUser: Array<string>;
	readonly created_at: string;
	readonly updated_at: string;
}
