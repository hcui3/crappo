/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    fontFamily: {
      primary: "Rubik",
    },
    extend: {
      colors: {
        darkblue: {
          DEFAULT: "#0D0D2B",
          secondary: "#252540",
        },
        blue: {
          DEFAULT: "#3671E9",
          hover: "#2766E6",
        },
        gray: {
          DEFAULT: "#E0E0E0",
        },
        violet: "#2B076E",
      },
      boxShadow: {
        primary: "0px 20px 200px rgba(57, 23, 119, 0.05)",
      },
      backgroundImage: {
        newsletter: "url('/src/assets/img/newsletter-bg.png')",
        newsletterBox: "url('/src/assets/img/newsletter-box.png')",
      },
    },
  },
  plugins: [],
};
