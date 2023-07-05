import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

interface CodeProps {
	className?: string;
	text: string;
}

export const Code = memo((props: CodeProps) => {
	const { className, text } = props;
	const { t } = useTranslation();

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.code, {}, [className])}>
			<Button className={cls.copyBtn} onClick={onCopy} variant='clear'>
				<CopyIcon className={cls.copyIcon} />
			</Button>
			<code>{text}</code>
		</pre>
	);
});
