function ListGroup({ items, activeFilter, onFilter }) {
	return (
		<div className="list-group">
			{items.map((item) => {
				const statusTag = item ? 'DONE' : 'TODO'

				const isActive = statusTag === activeFilter

				return (
					<button
						key={item}
						type="button"
						className={getClasses(isActive)}
						aria-current="true"
						onClick={(e) => onFilter(!isActive ? e.target.textContent : '')}
					>
						{statusTag}
					</button>
				)
			})}
		</div>
	)

	function getClasses(isActive) {
		let className = 'list-group-item list-group-item-action'

		if (isActive) className += ' active'

		return className
	}
}
export default ListGroup
