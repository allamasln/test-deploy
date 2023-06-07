import _ from 'lodash'
import { Link } from 'react-router-dom'

function Pagination({ pageCount, currentPage, onChangePage }) {
	if (pageCount <= 1) return null

	const pages = _.range(1, pageCount + 1)
	return (
		<nav aria-label="...">
			<ul className="pagination pagination-lg">
				{pages.map((page) => (
					<li
						key={page}
						className={page === currentPage ? 'page-item active' : 'page-item'}
					>
						<Link
							className="page-link"
							to={'/products?page=' + page}
							onClick={() => onChangePage(page)}
						>
							{page}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default Pagination
