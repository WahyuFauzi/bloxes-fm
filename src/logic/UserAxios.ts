import axios from 'axios';
import UpdateUserRequest from '../entity/user/UpdateUserRequest';
import UserEntity from "@/entity/user/UserEntity";

class UserAxios {
	private userUrl = 'http://localhost:3003/api/v1/user';

	getUser(userId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.userUrl}/${userId}`)
				.then((response) => {
					const data: UserEntity = new UserEntity(
						response.data.data.id,
						response.data.data.email,
						response.data.data.password,
						response.data.data.user_name,
						response.data.data.subscribed_space,
						response.data.data.used_space,
						response.data.data.subscribed_at,
						response.data.data.end_of_subscription,
						response.data.data.init_folder,
						response.data.data.recycle_bin,
						response.data.data.pinned,
						response.data.data.recent,
						response.data.data.created_at,
						response.data.data.updated_at
					)
					resolve(response.data.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}

	updateUser(userId, updateUserRequest: UpdateUserRequest) {
		return new Promise((resolve, reject) => {
			axios
				.put(`${this.userUrl}/${userId}`, updateUserRequest)
				.then((response) => {
					const data: UserEntity = new UserEntity(
						response.data.data.id,
						response.data.data.email,
						response.data.data.password,
						response.data.data.user_name,
						response.data.data.subscribed_space,
						response.data.data.used_space,
						response.data.data.subscribed_at,
						response.data.data.end_of_subscription,
						response.data.data.init_folder,
						response.data.data.recycle_bin,
						response.data.data.pinned,
						response.data.data.recent,
						response.data.data.created_at,
						response.data.data.updated_at
					)
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const userAxios = new UserAxios();

export default userAxios;
