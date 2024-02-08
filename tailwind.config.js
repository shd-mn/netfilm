/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "672px",
        md: "800px",
        lg: "1056px",
        xl: "1312px",
        "2xl": "1626px",
      },
    },
    extend: {
      colors: {
        "primary-45": "#E50000",
        "primary-50": "#FF0000",
        "primary-55": "#FF1919",
        "primary-60": "#FF3333",
        "primary-80": "#FF9999",
        "primary-90": "#FFCCCC",
        "primary-95": "#FFE5E5",
        "primary-99": "#FFFAFA",
        "primary-99": "#FFFAFA",

        "black-06": "#0F0F0F",
        "black-08": "#141414",
        "black-10": "#1A1A1A",
        "black-12": "#1F1F1F",
        "black-15": "#262626",
        "black-20": "#333333",
        "black-25": "#404040",
        "black-30": "#4C4C4C ",

        "grey-60": "#999999",
        "grey-65": "#A6A6A6",
        "grey-70": "#B3B3B3",
        "grey-75": "#BFBFBF",
        "grey-90": "#E4E4E7",
        "grey-95": "#F1F1F3",
        "grey-97": "#F7F7F8",
        "grey-99": "#FCFCFD",
      },
    },
  },
  plugins: [],
};
