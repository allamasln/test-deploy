import { Link } from 'react-router-dom'
import { useAuth } from '../context/auth'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar({ todoCount }) {
	const [user] = useAuth()

	return (
		<Navbar bg="primary" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#home">TODO.io</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/products">
						Products
					</Nav.Link>
				</Nav>

				<Nav className="justify-content-end">
					{user.isAuth ? (
						<Nav.Link as={Link} to="/logout">
							Cerrar sesión de <em>@{user.username}</em>
						</Nav.Link>
					) : (
						<>
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>

							<Nav.Link as={Link} to="/signup">
								Signup
							</Nav.Link>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	)
}
export default NavBar
