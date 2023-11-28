/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: {
          "06": "#EBF3FC",
          "05": "#6148FF",
          "04": "#6148FF57",
          "03": "#489CFF",
          "02": "#D0B7E6",
          "01": "#E2D4F0",
        },
        limegreen: {
          "05": "#AA9B87",
          "04": "#D4C2A8",
          "03": "#FFE9CA",
          "02": "#FFF0DC",
          "01": "#FFF8ED",
        },
        alert: {
          warning: "#FF0000",
          attention: "#F9CC00",
          success: "#73CA5C",
        },
        neutral: {
          "05": "#151515",
          "04": "#3C3C3C",
          "03": "#8A8A8A",
          "02": "#D0D0D0",
          "01": "#FFFFFF",
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    plugins: [],
  },
};
