export default class ItemEntity {
	constructor(
		id: string,
		item_name: string,
		item_total_size: number,
		created_at: string,
		updated_at: string
	) {
		this.id = id;
		this.item_name = item_name;
		this.item_total_size = item_total_size;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	readonly id: string;
	readonly item_name: string;
	readonly item_total_size: number;
	readonly created_at: string;
	readonly updated_at: string;
}
