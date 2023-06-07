import axios from 'axios'

import { toast } from 'react-toastify'

import config from '../config.json'

axios.interceptors.response.use(false, function (error) {
	if (error.response.status >= 500) {
		toast.error('Algo ha ocurrido volvemos pronto.', config.toast)
	} else if (error.response.status >= 400) {
		toast.error(error.response.data, config.toast)
	}
	return Promise.reject(error)
})

function setToken(jwt) {
	if (!jwt) return

	axios.defaults.headers.common['x-auth-token'] = jwt
}

const http = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	setToken,
}

export default http
