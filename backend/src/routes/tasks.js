const { Router } = require('express')
const { body, param } = require('express-validator')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
} = require('../handlers/tasks')

const router = Router()

const validate = {
	id: param('taskId')
		.isMongoId()
		.withMessage('Identificador del task invalido'),
	notEmptyTitle: body('title')
		.not()
		.isEmpty()
		.withMessage('Debe introducir un titulo'),
}

router.get('/', getAllTasks)

router.get('/:taskId', [isAuth, isAdmin], validate.id, getTaskById)

router.post('/', [isAuth], validate.notEmptyTitle, createTask)
router.put(
	'/:taskId',
	[isAuth, isAdmin],
	validate.id,
	validate.notEmptyTitle,
	body('completed').isBoolean().optional(),
	updateTask
)
router.delete('/:taskId', [isAuth, isAdmin], deleteTask)

module.exports = router
