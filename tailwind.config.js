/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": "#FF6300"
			},
			spacing: {
				'8xl': '88.625rem',
			}
		},
	},
	plugins: [],
};