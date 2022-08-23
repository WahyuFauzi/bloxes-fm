export default class UserEntity {
	constructor(
		id: string,
		email: string,
		password: string,
		user_name: string,
		subscribed_space: number,
		used_space: number,
		subscribed_at: string,
		end_of_subscription: string,
		init_folder: string,
		recycle_bin: Array<string>,
		pinned: Array<string>,
		recent: Array<string>,
		created_at: string,
		updated_at: string
	) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.user_name = user_name;
		this.subscribed_space = subscribed_space;
		this.used_space = used_space;
		this.subscribed_at = subscribed_at;
		this.end_of_subscription = end_of_subscription;
		this.init_folder = init_folder;
		this.recycle_bin = recycle_bin;
		this.pinned = pinned;
		this.recent = recent;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}

	readonly id: string;
	readonly email: string;
	readonly password: string;
	readonly user_name: string;
	readonly subscribed_space: number;
	readonly used_space: number;
	readonly subscribed_at: string;
	readonly end_of_subscription: string;
	readonly init_folder: string;
	readonly recycle_bin: Array<string>;
	readonly pinned: Array<string>;
	readonly recent: Array<string>;
	readonly created_at: string;
	readonly updated_at: string;
}
