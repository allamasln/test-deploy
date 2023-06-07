import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Layout from './pages/Layout'
import CreateTodo from './pages/CreateTodo'
import UpdateTodo from './pages/UpdateTodo'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import ProtectedRoute from './utils/ProtectedRoute'

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		element: <Layout />,
		children: [
			{
				path: '/login',
				element: (
					<ProtectedRoute role="notAuth">
						<Login />
					</ProtectedRoute>
				),
			},
			{
				path: '/logout',
				element: (
					<ProtectedRoute role="isAuth">
						<Logout />
					</ProtectedRoute>
				),
			},
			{
				path: '/signup',
				element: (
					<ProtectedRoute role="notAuth">
						<Signup />
					</ProtectedRoute>
				),
			},
			{
				path: '/products',
				children: [
					{
						path: '/products',
						element: <App />,
					},
					{
						path: '/products/new',
						element: (
							<ProtectedRoute role="isAuth">
								<CreateTodo />
							</ProtectedRoute>
						),
					},
					{
						path: '/products/edit/:todoId',
						element: (
							<ProtectedRoute role="isAdmin">
								<UpdateTodo />
							</ProtectedRoute>
						),
					},
				],
			},
		],
	},
])

export default router
