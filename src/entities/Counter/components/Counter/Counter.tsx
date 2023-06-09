/* eslint-disable i18next/no-literal-string */
import cls from './Counter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../../model/slices/counterSlice';
import { getCounterValue } from '../../model/selectors/getCounterValue/getCounterValue';
import { Button } from '@/shared/components/Button/Button';
import { memo } from 'react';

export const Counter = memo(() => {
	const value = useSelector(getCounterValue);

	const dispath = useDispatch();

	const increment = () => {
		dispath(counterActions.increment());
	};

	const decrement = () => {
		dispath(counterActions.decrement());
	};

	return (
		<div>
			<h1 className={cls.title}>This is a counter</h1>
			<h2 data-testid={'count'}>{value}</h2>
			<Button onClick={increment}>incrementor</Button>
			<Button onClick={decrement}>decrementor</Button>
		</div>
	);
});
