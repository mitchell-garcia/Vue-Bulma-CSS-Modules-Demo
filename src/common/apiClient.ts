import emails from './emails';
import * as _ from 'lodash';

class ApiClient {
	getEmails() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(emails);
			}, 300);
		});
	}
	getEmailById(id: string | number) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const email = _.find(emails, (email) => email._id === id);
				if (email) {
					email.isOpened = true;
					resolve(email);
				} else {
					reject(new Error(`No email found with id ${id}`))
				}
			});
		});
	}
}

const apiClient = new ApiClient();
export default apiClient;