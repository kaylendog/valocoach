module.exports = {
	extends: "infernal",
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./packages/*/tsconfig.json", "./apps/*/tsconfig.json", "./services/*/tsconfig.json"],
	},
	ignorePatterns: ["dist"],
	rules: {
		"new-cap": "off",
		"no-void": "off",
		"@typescript-eslint/no-extraneous-class": "off",
	},
};
