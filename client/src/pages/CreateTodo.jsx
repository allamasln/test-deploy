import Form from '../components/common/Form'
import todosService from '../services/todosService'
import { toast } from 'react-toastify'
import config from '../config.json'
import { Link } from '../components/lib'

function CreateTodo() {
	const handleCreate = (data) => {
		todosService
			.createTask(data)
			.then(() => {
				toast.success('Creado', config.toastSettings)
			})
			.catch((err) => console.log('hola'))
	}

	return (
		<>
			<Form
				inputs={[{ name: 'title', label: 'Título' }]}
				header="Crear TODO"
				submitLabel="Crear"
				onSubmit={handleCreate}
				isResetAfterSubmit
			/>

			<Link to="/products">Volver</Link>
		</>
	)
}
export default CreateTodo
