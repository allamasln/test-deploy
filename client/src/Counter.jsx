import { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)

	function handleIncrement() {
		setCount(count + 1)
	}

	function handleDecrement() {
		if (!count) return
		setCount(count - 1)
	}

	return (
		<>
			<button onClick={handleDecrement}>-</button>
			<div>{count}</div>
			<button onClick={handleIncrement}>+</button>
		</>
	)
}
export default Counter
