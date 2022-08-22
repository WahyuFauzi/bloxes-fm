import axios from 'axios';
import UpdateUserRequest from '../entity/user/UpdateUserRequest';

class UserAxios {
	private userUrl = 'http://localhost:3003/api/v1/user';

	getUser(userId) {
		return new Promise((resolve, reject) => {
			axios
				.get(`${this.userUrl}/${userId}`)
				.then((response) => {
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
					resolve(response.data.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const userAxios = new UserAxios();

export default userAxios;
