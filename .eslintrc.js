module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		// По рекомендациям
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/display-name': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		// Warnings
		semi: 'warn',
		'@typescript-eslint/no-empty-interface': 'warn',
		'react/jsx-props-no-spreading': 'warn',
		// ERRORS
		'react/button-has-type': 'error',
		// 'no-undef': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		// 'react/jsx-max-props-per-line': [2, { maximum: 3, when: 'always' }],
		// 'react/jsx-first-prop-new-line': [2, 'multiline'],
	},
	globals: {
		__IS_DEV__: true,
	},
	// По рекомендациям
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			fragment: 'Fragment',
			version: 'detect',
		},
	},
};
