/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	// theme: {
	// 	extend: {},
	// },
	plugins: [
		daisyui,
	],
	daisyui: {
		themes: [
			// 'synthwave',
			// 'luxury',
			// 'business',
			// 'sunset',
			// 'night',
			// 'halloween',
			// 'dracula',
			// 'dark',
			'dim',
		]
	}
}

