require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')
const cors = require('cors')

const errors = require('../middlewares/errors')
const tasks = require('../routes/tasks')
const users = require('../routes/users')

module.exports = function (app) {
	app.use(cors())
	app.use(json())
	app.use(morgan('dev'))

	app.use('/api/tasks', tasks)
	app.use('/users', users)

	// health check endpoint
	app.get('/ping', async (req, res) => {
		res.status(200).send('pong')
	})

	app.use(errors)
}
