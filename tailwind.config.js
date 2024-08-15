/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // Ensure your HTML templates are included
    "./static/**/*.js", // Include any JS files using Tailwind classes
    "./static/**/*.css", // Optionally include your CSS files
    "./*.{html,js}", // Include any additional HTML or JS files in the root directory
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#bae681",
        "custom-red": "#d29293",
        "custom-pink": "#f46cb1",
        "custom-dark-pink": "#f047a7",
      },
    },
  },
  plugins: [],
};
