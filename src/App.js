import React from 'react';
import './App.css';

export default function App() {
	var time = 0;

	const interval = setInterval(() => {
		++time;
		console.log(time);
	}, 500)

	setTimeout(() => clearInterval(interval)
		, 100000);

	return (
		<div className="App">
			<h1>{time}</h1>
		</div>
	);
}
