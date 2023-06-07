const Task = require('../models/task')
const User = require('../models/user')

const validateInputs = require('../utils/validateInputs')

const getAllTasks = async (req, res) => {
	const tasks = await Task.find().limit(400).exec()

	res.json(tasks)
}

const getTaskById = async (req, res) => {
	const { taskId } = req.params

	validateInputs(req, res)

	const task = await Task.findById(taskId).exec()

	if (!task) return res.status(404).send('Task no encontrada')

	res.json(task)
}

const createTask = async (req, res) => {
	validateInputs(req, res)

	const newTask = await Task.create({ ...req.body })

	res.json(newTask)
}

const updateTask = async (req, res) => {
	const { taskId } = req.params

	validateInputs(req, res)

	const updatedTask = await Task.findByIdAndUpdate(
		taskId,
		{ ...req.body },
		{ new: true }
	)

	res.json(updatedTask)
}

const deleteTask = async (req, res) => {
	const { taskId } = req.params

	const deletedTask = await Task.findByIdAndDelete(taskId)

	if (!deletedTask) res.status(404).send('No existe el task seleccionado')

	res.json(deletedTask)
}

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
}
