export default class FileEntity {
	constructor(
		id: string,
		file_name: string,
		file_total_size: number,
		created_at: string,
		updated_at: string
	) {
		this.id = id;
		this.file_name = file_name;
		this.file_total_size = file_total_size;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	readonly id: string;
	readonly file_name: string;
	readonly file_total_size: number;
	readonly created_at: string;
	readonly updated_at: string;
}
