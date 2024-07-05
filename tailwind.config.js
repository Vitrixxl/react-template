/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*"],
  darkMode: "media",
  theme: {
    extend: {
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
      },
      colors: {
        primary: {
          100: "#e6f0fc",
          200: "#b4d1f5",
          300: "#82b3ee",
          400: "#5094e8",
          500: "#1e76e1",
          600: "#175caf",
          700: "#11427d",
          800: "#0a274b",
          900: "#030d19",
          DEFAULT: "#1e76e1",
        },
        secondary: {
          100: "#f4eaf7",
          200: "#dec1e8",
          300: "#c898d8",
          400: "#b26fc9",
          500: "#9c46b9",
          600: "#793690",
          700: "#572767",
          800: "#34173e",
          900: "#110815",
          DEFAULT: "#9c46b9",
        },
        danger: {
          100: "#fce6e7",
          200: "#f6b3b6",
          300: "#f08086",
          400: "#ea4e55",
          500: "#e41b25",
          600: "#b1151d",
          700: "#7f0f15",
          800: "#4c090c",
          900: "#190304",
          DEFAULT: "#e41b25",
        },
        warning: {
          100: "#f0ae75",
          200: "#eda15e",
          300: "#eb9347",
          400: "#e88630",
          500: "#e67919",
          600: "#b25e14",
          700: "#7f430e",
          800: "#4c2808",
          900: "#190d03",
          DEFAULT: "#e41b25",
          DEFAULT: "#e67919",
        },
        success: {
          100: "#94c988",
          200: "#82c074",
          300: "#70b760",
          400: "#5eae4c",
          500: "#4DA639",
          600: "#459533",
          700: "#3d842d",
          800: "#357427",
          900: "#2e6322",

          DEFAULT: "#4DA639",
        },
        "dark-foreground": "#f8f8f8",
        "light-foreground": "#252525",
        "dark-background": "#252525",
        "light-background": "#f8f8f8",
        "light-default": "#D6D6D6",
        "dark-default": "#484848",
        "light-placeholder": "#AAAAAA",
        Wbg: "#f8f8f8",
        Dbg: "#252525",


        foreground: {
          DEFAULT: "#333333",
        },
      },
    },
  },
  plugins: [],
};
