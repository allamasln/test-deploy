import { useAuth } from '../context/auth'
import { Link } from './lib'

function Product({ _id, title, completed, onDelete }) {
	const [user] = useAuth()
	return (
		<div
			className="card"
			style={{
				minWidth: '250px',
				maxWidth: '250px',
				margin: '4px',
				width: '25%',
				backgroundColor: 'aquamarine',
			}}
		>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-body-secondary">
					<span>{completed ? 'DONE' : 'TODO'}</span>
				</h6>
				{user.isAdmin && (
					<>
						<Link to={'/products/edit/' + _id}>EDITAR</Link>

						<Link onClick={onDelete} type="danger">
							BORRAR
						</Link>
					</>
				)}
			</div>
		</div>
	)
}
export default Product
