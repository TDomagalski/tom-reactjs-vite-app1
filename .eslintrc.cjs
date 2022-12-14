module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:prettier/recommended",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		"no-unused-vars": "warn",
		"no-use-before-define": ["error", { functions: false, classes: false }],
		"prettier/prettier": "error",
	},
};
