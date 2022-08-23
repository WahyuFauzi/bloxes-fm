export default class UpdateUserRequest {
	constructor(
		password: string,
		user_name: string,
		subscribed_space: number,
		used_space: number,
		recycle_bin: Array<string>,
		pinned: Array<string>,
		recent: Array<string>
	) {
		this.password = password;
		this.subscribed_space = subscribed_space;
		this.used_space = used_space;
		this.user_name = user_name;
		this.recycle_bin = recycle_bin;
		this.pinned = pinned;
		this.recent = recent;
	}

	readonly password: string;
	readonly user_name: string;
	readonly subscribed_space: number;
	readonly used_space: number;
	readonly recycle_bin: Array<string>;
	readonly pinned: Array<string>;
	readonly recent: Array<string>;
}
