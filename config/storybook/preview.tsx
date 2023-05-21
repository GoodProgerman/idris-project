// import React from 'react';
import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { I18nDecorator } from '../../src/shared/config/storybook/I18nDecorator';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [StyleDecorator, ThemeDecorator('app-light-theme'), RouterDecorator, I18nDecorator],
};

export const globalTypes = {
	locale: {
		name: 'Locale',
		description: 'Internationalization locale',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'en', title: 'English' },
				{ value: 'ru', title: 'Русский' },
			],
			showName: true,
		},
	},

	// theme: {
	// 	name: 'Theme',
	// 	description: 'Global theme for components',
	// 	toolbar: {
	// 		// https://5a375b97f4b14f0020b0cda3-wbeulgbetj.chromatic.com/?path=/story/basics-icon--labels
	// 		icon: 'circlehollow',
	// 		items: [
	// 			{ value: 'app-light-theme', title: 'Light' },
	// 			{ value: 'app-dark-theme', title: 'Dark' },
	// 			{ value: 'app-dark-orange', title: 'Orange' },
	// 		],
	// 		showName: true,
	// 		dynamicTitle: true,
	// 	},
	// },
};

export default preview;
