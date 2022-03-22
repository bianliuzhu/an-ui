module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"react-app",
		"react-app/jest",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"prettier",
		"plugin:storybook/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/prop-types": 0,
	},
	overrides: [
		{
			files: ["**/*.stories.*"],
			rules: {
				"import/no-anonymous-default-export": "off",
			},
		},
	],
};
