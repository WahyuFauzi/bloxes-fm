import SampleFileEntity from '../file/SampleFileEntity';
import SampleUserEntity from '../user/SampleUserEntity';
import SampleFolderEntity from './SampleFolderEntity';

export default class FolderEntity {
	constructor(
		id: string,
		folder_name: string,
		nested_folders: Array<SampleFolderEntity>,
		items: Array<SampleFileEntity>,
		shared_user: Array<SampleUserEntity>,
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
	readonly nested_folders: Array<SampleFolderEntity>;
	readonly items: Array<SampleFileEntity>;
	readonly sharedUser: Array<SampleUserEntity>;
	readonly created_at: string;
	readonly updated_at: string;
}
