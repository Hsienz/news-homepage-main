/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Soft_orange: "hsl(35, 77%, 62%)",
				Soft_red: "hsl(5, 85%, 63%)",

				// Neutral

				Off_white: "hsl(36, 100%, 99%)",
				Grayish_blue: "hsl(233, 8%, 79%)",
				Dark_grayish_blue: "hsl(236, 13%, 42%)",
				Very_dark_blue: "hsl(240, 100%, 5%)",
			},
			fontFamily: {
        Inter: ['Inter','sans-serif'],
      },
		},
	},
	plugins: [],
};
