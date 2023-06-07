import Form from '../components/common/Form'
import { toast } from 'react-toastify'
import config from '../config.json'
import { Link } from '../components/lib'
import authService from '../services/authService'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'
function Signup() {
	const [user, dispatch] = useAuth()
	const navigate = useNavigate()
	const handleRegister = async (data) => {
		const user = await authService.signup(data)

		dispatch({ type: 'LOGIN', payload: user })
		navigate(-1, { replace: true })
	}

	return (
		<>
			<Form
				inputs={[
					{ name: 'username', label: 'Nombre de usuario' },
					{ name: 'password', label: 'Contraseña', type: 'password' },
				]}
				header="Registro de usuario"
				submitLabel="Registrar"
				onSubmit={handleRegister}
				isResetAfterSubmit
			/>
		</>
	)
}
export default Signup
