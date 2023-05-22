import type { StorybookConfig } from '@storybook/react-webpack5';
import { buildScssLoader } from '../webpack/loaders/buildScssLoader';
import path from 'path';
import { buildSvgrLoader } from '../webpack/loaders/buildSvgrLoader';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../../public'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config, { configType }) => {
		// Make whatever fine-grained changes you need
		// Return the altered config
		if (config.resolve) {
			config.resolve.modules = [
				...(config.resolve.modules || []),
				path.resolve(__dirname, '..', '..', 'src'),
			];
			config.resolve.alias = {
				...config.resolve.alias,
				// '@/': path.resolve(__dirname, '../src'),
				// '@/*': path.resolve(__dirname, '../src/*'),
				'@': path.resolve(__dirname, '..', '..', 'src'),
			};
		}
		if (config.module?.rules) {
			config.module.rules = [...(config.module?.rules || []), buildScssLoader(true)];

			config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
				if (rule !== '...' && /svg/.test(rule.test as string)) {
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			});

			config.module.rules.push(buildSvgrLoader());
		}

		return config;
	},
};

export default config;