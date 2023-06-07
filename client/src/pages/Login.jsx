import Form from '../components/common/Form'
import { toast } from 'react-toastify'
import config from '../config.json'
import { Link } from '../components/lib'

import authService from '../services/authService'
import { useAuth } from '../context/auth'
import { useNavigate } from 'react-router-dom'

function Login() {
	const [user, dispatch] = useAuth()
	const navigate = useNavigate()

	const handleLogin = async (data) => {
		const user = await authService.login(data)

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
				header="Acceso de usuario"
				submitLabel="Entrar"
				onSubmit={handleLogin}
				isResetAfterSubmit
			/>
		</>
	)
}
export default Login
