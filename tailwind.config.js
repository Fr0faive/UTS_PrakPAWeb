/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url(hero.jpg)",
        "content-img": "url(./assets/content.jpg)",
      }
    },
  },
  plugins: [require("daisyui")],
}

