const config = {
	darkMode: 'class',
	content: [
		// Keep existing values and append the following:
		require('path').join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		// Keep any existing plugins present and append the following:
		require('@brainandbones/skeleton/tailwind/theme.cjs')
	]
};

module.exports = config;
