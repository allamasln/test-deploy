import { isEmpty, orderBy } from 'lodash'

function filterData(allData, { activeFilter, query, sortedField }) {
	let subset = allData

	if (activeFilter) {
		subset = subset.filter((todo) => {
			const status = todo.completed ? 'DONE' : 'TODO'

			return status === activeFilter
		})
	}

	if (query) {
		subset = subset.filter((todo) =>
			todo.title.toLowerCase().includes(query.toLowerCase())
		)
	}

	if (!isEmpty(sortedField)) {
		subset = orderBy(subset, [sortedField.path], [sortedField.sense])
	}

	return subset
}

export default filterData
