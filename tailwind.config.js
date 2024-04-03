/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				darkBlue: "hsl(217, 28%, 15%)",
				greenPrimary: "#58ae9c",
				greenDark: "#274431",
				desertTan: "#f3f3f3",
				almostWhite: "#f5f8f7",
			},
			fontFamily: {
				sans: ["Raleway", "sans-serif"],
				opensans: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
