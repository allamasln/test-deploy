import Form from '../components/common/Form'
import todosService from '../services/todosService'

import _ from 'lodash'
import { toast } from 'react-toastify'
import config from '../config.json'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { Link } from '../components/lib'
import useTodos from '../hooks/useTodos'

function UpdateTodo() {
	let { todoId } = useParams()
	const [todo, setTodo] = useState({})
	const { categories } = useTodos()

	const navigate = useNavigate()

	useEffect(() => {
		todosService
			.getTaskById(todoId)
			.then(({ data }) => setTodo(data))
			.catch(() => navigate(-1))
	}, [todoId])

	const handleUpdate = (data) => {
		todosService
			.updateTask(todoId, data)
			.then(() => {
				toast.success('Actualizado', config.toast)
			})
			.finally(() => navigate(-1))
	}

	if (_.isEmpty(todo) || _.isEmpty(categories)) return <Spinner />

	return (
		<>
			<Form
				inputs={[
					{ name: 'title', label: 'Título' },
					{
						name: 'completed',
						label: 'Estado',
						type: 'select',
						options: categories.map((c) => ({
							path: c,
							label: c ? 'DONE' : 'TODO',
						})),
					},
				]}
				defaultValues={{
					title: todo.title,
					completed: todo.completed,
				}}
				header={`Actualizar TODO: "${todo.title}"`}
				submitLabel="Actualizar"
				onSubmit={handleUpdate}
			/>
			<Link to="/products">Volver</Link>
		</>
	)
}
export default UpdateTodo
