import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/components/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	disabled?: boolean;
}

const options = Object.entries(Currency).map((arr) => ({ value: arr[0], content: arr[1] }));

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const { className, onChange, value, disabled } = props;
	const { t } = useTranslation();

	const changeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange]
	);

	return (
		<Select
			value={value}
			onChange={changeHandler}
			className={classNames('', {}, [className])}
			label={t('Укажите валюту')}
			options={options}
			disabled={disabled}
		/>
	);
});
