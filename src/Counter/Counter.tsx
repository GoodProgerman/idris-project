import { FC, useState } from 'react';
import cls from './Counter.module.scss';

interface CounterProps {
	className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
	const { className } = props;
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1 className={cls.title}>This is a counter</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(prev => prev + 1)}>incrementor</button>
			<button onClick={() => setCount(prev => prev - 1)}>decrementor</button>
		</div>
 );
} 