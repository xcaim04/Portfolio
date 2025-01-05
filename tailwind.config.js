/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0CA4A5",
                green: "#3EC300",
                white: "#ffffff",
                dark: "#1b4353",
                bluedark: "#0b3954",
            },
            fontFamily: {
                Lato: ['"Lato"', "serif"],
            },
        },
    },
    plugins: [],
};
