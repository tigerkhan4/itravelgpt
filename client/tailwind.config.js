/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appbeige': '#ede6e0',
        'appred': '#d68b89',
        'appyellow': '#e7c39b',
        'appblue': '#a4bbc6',
        'appgreen': '#9dada4',
        'darkblue': '#70a1bb',
        'darkgreen': '#5f8074',
      },
    },
  },
  plugins: [],
}