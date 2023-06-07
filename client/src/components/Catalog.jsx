import Product from './Product'
import ListGroup from './ListGroup'

import Pagination from './Pagination'

import { Link } from './lib'
import Form from './common/Form'
import { useAuth } from '../context/auth'

function Catalog({
	categories,
	todos,
	pageCount,
	viewConfig,
	onFilter,
	onDelete,
	onSearch,
	onChangePage,
	onSort,
}) {
	const [user] = useAuth()
	return (
		<>
			<div className="row">
				<div className="col-2">
					<ListGroup
						items={categories}
						onFilter={onFilter}
						activeFilter={viewConfig.activeFilter}
					/>
				</div>

				<div className="col ">
					<Form
						inputs={[
							{ name: 'searchbox', onChange: onFilter },
							{
								name: 'sort',
								options: [
									{ path: 'title', label: 'Titulo' },
									{ path: 'completed', label: 'Status' },
								],
								type: 'select',
								onChange: onSort,
							},
						]}
					/>

					<h2>
						Productos <Link to="/products/new">+ Nueva task</Link>
					</h2>

					<div className="card-group">
						{todos.map((todo) => (
							<Product
								key={todo._id}
								{...todo}
								onDelete={() => onDelete(todo)}
							/>
						))}
					</div>

					<Pagination
						currentPage={viewConfig.currentPage}
						pageCount={pageCount}
						onChangePage={onChangePage}
						pageSize={viewConfig.pageSize}
					/>
				</div>
			</div>
		</>
	)
}
export default Catalog
