import { useEffect, useState } from 'react'

import todosService from '../services/todosService'

function useTodos() {
	const [todos, setTodos] = useState([])
	const [isLoadingTodos, setIsLoadingTodos] = useState(true)

	const [categories, setCategories] = useState([])

	useEffect(() => {
		todosService.getAllTasks().then(({ data }) => {
			setTodos(data)
			setIsLoadingTodos(false)

			const categories = data.reduce(
				(acc, item) =>
					!acc.includes(item.completed) ? [...acc, item.completed] : acc,
				[]
			)

			setCategories(categories)
		})
	}, [])

	return { todos, setTodos, categories, isLoadingTodos }
}

export default useTodos
