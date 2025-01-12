/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // primary: "#FC7A69", // original color
        primary: "#ED6A59",

        secondary: "#D1D5DB",
      },
      fontFamily: {
        sans: ["Outfit", " serif"],
      },
    },
  },
  plugins: [typography],
};
