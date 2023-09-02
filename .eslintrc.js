module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'standard', 'eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	plugins: ['react'],
	rules: {},
};
