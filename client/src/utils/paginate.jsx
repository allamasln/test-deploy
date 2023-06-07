function paginate(items, pageSize, currentPage) {
	const pageCount = Math.ceil(items.length / pageSize)
	const startIndex = (currentPage - 1) * pageSize

	let itemsInPage = items.slice(startIndex, startIndex + pageSize)

	return [pageCount, itemsInPage]
}

export default paginate
