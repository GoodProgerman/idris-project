import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { AppLink } from '@/shared/components/AppLink/AppLink';

interface NavbarProps {
	className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
	const { className } = props;

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink to={'/'}>MainPage</AppLink>
				<AppLink to={'/about'}>AboutPage</AppLink>
			</div>
		</div>
	);
};
