export default class SampleItemEntity {
	constructor(id: string, item_name: string) {
		this.id = id;
		this.item_name = item_name;
	}

	readonly id: string;
	readonly item_name: string;
}
