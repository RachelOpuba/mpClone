const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
				primary: {
					darkBlue: "#031335",
					lightBlue: "#b7cffa",
				},
				gray: {
					10: "#EEEEEE",
					20: "#A2A2A2",
					30: "#7B7B7B",
					50: "#585858",
					90: "#141414",
				},
				orange: {
					50: "#FF814C",
				},
				blue: {
					70: "#021639",
				},
				yellow: {
					50: "#FEC601",
				},
			},
    },
  },
  darkMode: "class",
  plugins:  [nextui()],
}

