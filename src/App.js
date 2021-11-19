import React, {useState} from 'react'
import './App.css'

function App() {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1)
	}

	function decrement() {
		setCounter(counter - 1)
	}

	function reset() {
		setCounter(0)
	}

	return (
		<div className="wrapper">
			<h1>Counter</h1>
			<div>
				<span id="counter" className="counter">{counter}</span>
			</div>

			<div className="button-wrapper">
				<button onClick={() => increment()} className="button">+</button>
				<button onClick={() => reset()} className="button">Reset</button>
				<button onClick={() => decrement()} className="button">-</button>
			</div>
		</div>
	);
}

export default App;
