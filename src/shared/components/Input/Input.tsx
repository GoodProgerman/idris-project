import {
	ChangeEvent,
	InputHTMLAttributes,
	SyntheticEvent,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	placeholder?: string;
	type?: string;
	value?: string | number;
	onChange?: (value: string, name?: string) => void;
	autoFocus?: boolean;
	readOnly?: boolean;
	name?: string;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		placeholder,
		type = 'text',
		value = '',
		onChange,
		autoFocus,
		readOnly,
		name,
		...otherProps
	} = props;
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [caretPosition, setCaretPosition] = useState<number>(0);
	const ref = useRef<HTMLInputElement>(null);

	const isCaretVisible = isFocused && !readOnly;

	const onFocus = () => {
		setIsFocused(true);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (name) {
			onChange?.(event.target.value, name);
		} else {
			onChange?.(event.target.value);
		}
	};

	const onSelect = (event: SyntheticEvent<HTMLInputElement, Event>) => {
		setCaretPosition(event.currentTarget.selectionStart || 0);
	};

	useEffect(() => {
		if (autoFocus) {
			onFocus();
			setTimeout(() => {
				ref.current?.focus();
			}, 30);
		}
	}, [autoFocus]);

	return (
		<HStack className={classNames(cls.componentWrapper, { [cls.readonly]: readOnly }, [className])}>
			{placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
			<div className={cls.caretAndInputWrapper}>
				<input
					{...otherProps}
					ref={ref}
					type={type}
					className={cls.input}
					value={value}
					onChange={changeHandler}
					onSelect={onSelect}
					onFocus={onFocus}
					onBlur={onBlur}
					autoFocus={autoFocus}
					readOnly={readOnly}
				/>
				{isCaretVisible && (
					<span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />
				)}
			</div>
		</HStack>
	);
});
