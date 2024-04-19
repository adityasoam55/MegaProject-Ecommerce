/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        tomato:{
          default: "#f58132"
        }
      }
    },
    // colors:{
    //   tomato:{
    //     default: "#f58132"
    //   }
    // }
  },
  plugins: [],
}

