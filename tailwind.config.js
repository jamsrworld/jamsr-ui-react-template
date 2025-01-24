/** @type {import('tailwindcss').Config} */

import { withJamsrUI } from "@jamsr-ui/theme";

const config = withJamsrUI({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@jamsr-ui/*/dist/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
export default config;