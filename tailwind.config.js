/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		screens: {
			"xlm": { "raw": "(max-width: 1280px)" },
			...defaultTheme.screens,
		},
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