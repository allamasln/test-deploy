import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from '../components/NavBar'
import Container from 'react-bootstrap/Container'
function Layout() {
	return (
		<>
			<NavBar />
			<Container fluid className="mt-3">
				<Outlet />
			</Container>
			<ToastContainer />
		</>
	)
}

export default Layout
