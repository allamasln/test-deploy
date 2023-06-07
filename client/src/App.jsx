import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { toast } from 'react-toastify'
import config from './config.json'

import todosService from './services/todosService'

import useTodos from './hooks/useTodos'

import Catalog from './components/Catalog'
import Spinner from './components/Spinner'

import filterData from './utils/filterData'
import paginate from './utils/paginate'

function App() {
	let [searchParams, setSearchParams] = useSearchParams()

	const { todos, categories, setTodos, isLoadingTodos } = useTodos()

	const [viewConfig, setViewConfig] = useState({
		activeFilter: '',
		query: '',
		sortedField: {},
		pageSize: 4,
		currentPage: +searchParams.get('page') || 1,
	})

	const allTodos = filterData(todos, viewConfig)

	const [pageCount, filteredTodos] = paginate(
		allTodos,
		viewConfig.pageSize,
		viewConfig.currentPage
	)

	useEffect(() => {
		if (!pageCount || viewConfig.currentPage <= pageCount) return

		setSearchParams({ page: 1 })
		setViewConfig({ ...viewConfig, currentPage: 1 })
	}, [pageCount])

	const handleDeleteProduct = (product) => {
		if (confirm('¿Estas seguro?')) {
			todosService.deleteTask(product._id).then(() => {
				setTodos(todos.filter((todo) => todo._id !== product._id))
				toast.success('Borrado con exito', config.toast)
			})
		}
	}

	const handleChangePage = (currentPage) =>
		setViewConfig({ ...viewConfig, currentPage })

	const handleFilter = (status) =>
		setViewConfig({ ...viewConfig, activeFilter: status, currentPage: 1 })

	const handleSearch = (e) =>
		setViewConfig({ ...viewConfig, query: e.target.value, currentPage: 1 })

	const handleSort = (data) =>
		setViewConfig({
			...viewConfig,
			sortedField: { path: data, sense: 'desc' },
		})

	return (
		<>
			{isLoadingTodos ? (
				<Spinner />
			) : (
				<Catalog
					todos={filteredTodos}
					pageCount={pageCount}
					categories={categories}
					viewConfig={viewConfig}
					onFilter={handleFilter}
					onSearch={handleSearch}
					onChangePage={handleChangePage}
					onSort={handleSort}
					onDelete={handleDeleteProduct}
				/>
			)}
		</>
	)
}

export default App
