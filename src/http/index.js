import axios from 'axios';

const BASE_URL = 'https://api.green-api.com';

const $host = axios.create({
	baseURL: BASE_URL,
});

const hostInterceptor = (config) => {
	config.headers['Content-Type'] = 'application/json';
	return config;
};

$host.interceptors.request.use(hostInterceptor);

export default $host;
