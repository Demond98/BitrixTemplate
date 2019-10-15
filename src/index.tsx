import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
const func = (a: number) : number => {
	return a * a;
}

console.log(func(5));