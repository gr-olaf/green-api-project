export default class UserAPI {
	static login(idInstance, apiTokenInstance) {
		localStorage.setItem('idInstance', idInstance);
		localStorage.setItem('apiTokenInstance', apiTokenInstance);
	}

	static logout() {
		localStorage.removeItem('idInstance');
		localStorage.removeItem('apiTokenInstance');
	}
}
