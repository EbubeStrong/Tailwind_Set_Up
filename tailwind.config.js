/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the paths to all of the template files in your project
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Update this path if your source files are in a different directory
  ],
  theme: {
    extend: {
      // You can customize your theme here
      colors: {
        // Add custom colors here if needed
      },
    },
  },
  plugins: [],
};
