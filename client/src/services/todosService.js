import http from './httpService'

import config from '../config.json'

const endpoint = config.apiURL + '/api/tasks'

function getEndpoint(id) {
	return !id ? endpoint : endpoint + '/' + id
}

function getAllTasks() {
	return http.get(getEndpoint())
}

function getTaskById(id) {
	return http.get(getEndpoint(id))
}

function createTask(payload) {
	return http.post(getEndpoint(), payload)
}

function updateTask(id, payload) {
	return http.put(getEndpoint(id), payload)
}

function deleteTask(id) {
	return http.delete(getEndpoint(id))
}

const todosService = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
}

export default todosService
