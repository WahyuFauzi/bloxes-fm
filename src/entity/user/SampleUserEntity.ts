export default class SampleUserEntity {
	constructor(id: string, user_name: string) {
		this.id = id;
		this.user_name = user_name;
	}

	readonly id: string;
	readonly user_name: string;
}
