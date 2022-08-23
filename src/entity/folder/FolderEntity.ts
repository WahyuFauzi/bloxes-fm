import SampleFileEntity from '../file/NestedFileEntity';
import SampleUserEntity from '../user/SampleUserEntity';
import NestedFolderEntity from './NestedFolderEntity';

export default class FolderEntity {
	constructor(
		id: string,
		folder_name: string,
		nested_folders: Array<NestedFolderEntity>,
		items: Array<SampleFileEntity>,
		shared_user: Array<SampleUserEntity>,
		created_at: string,
		updated_at: string
	) {
		this.id = id;
		this.folder_name = folder_name;
		this.nested_folders = nested_folders;
		this.items = items;
		this.shared_user = shared_user;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	readonly id: string;
	readonly folder_name: string;
	readonly nested_folders: Array<NestedFolderEntity>;
	readonly items: Array<SampleFileEntity>;
	readonly shared_user: Array<SampleUserEntity>;
	readonly created_at: string;
	readonly updated_at: string;
}
