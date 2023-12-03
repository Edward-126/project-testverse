/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#fafafa",
        primary: "#171717",
        secondary: "#404040",
        accent: "#f7ce3b",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const colors = theme("colors");

      const utilityClasses = {
        ".highlight-text": {
          color: colors.primary,
          "font-weight": 620,
        },
        ".t-btn": {
          display: "inline-block",
          "font-weight": 400,
          "text-align": "center",
          "white-space": "nowrap",
          "vertical-align": "middle",
          "user-select": "none",
          border: "1px solid transparent",
          padding: "0.375rem 0.75rem",
          "font-size": "1rem",
          "line-height": "1.5",
          "border-radius": "0.25rem",
          transition:
            "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, transform 0.2s ease-in-out",
        },
        ".t-btn:hover": {
          color: colors.primary,
          "text-decoration": "none",
          "background-color": colors.background,
          "border-color": colors.background,
        },
        ".t-btn:active, .t-btn.active": {
          transform: "scale(0.95)",
        },
        ".t-btn-primary": {
          color: colors.background,
          "background-color": colors.primary,
          "border-color": colors.primary,
        },
        ".t-btn-primary:hover": {
          color: colors.background,
          "background-color": colors.secondary,
          "border-color": colors.secondary,
        },
        ".t-btn-primary:active, .t-btn-primary.active": {
          color: "#fff",
          "background-color": colors.primary,
          "border-color": colors.primary,
        },
        ".t-btn-secondary": {
          color: colors.text,
          "background-color": "transparent",
          "border-color": colors.secondary,
        },
        ".t-btn-secondary:hover": {
          color: colors.background,
          "background-color": colors.secondary,
          "border-color": colors.secondary,
        },
        ".t-btn-secondary:active, .t-btn-secondary.active": {
          color: "#fff",
          "background-color": colors.primary,
          "border-color": colors.primary,
        },
        ".t-btn-glow": {
          "background-color": colors.primary,
          border: "1px solid " + colors.primary,
          color: "#fff",
        },
        ".t-btn-glow:hover": {
          color: "#fff",
          "background-color": colors.primary,
          border: "1px solid " + colors.primary,
          "box-shadow": "0 0 15px 4px " + colors.primary,
        },
        ".t-btn-glow:active, .t-btn-glow.active": {
          "box-shadow": "0 0 10px 2.5px " + colors.primary,
        },
        ".highlight-link": {
          position: "relative",
          "text-decoration": "none",
          color: colors.primary,
        },
        ".highlight-link::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1.2px",
          "background-color": colors.primary,
          transition: "height 0.2s ease",
        },
        ".highlight-link:hover::before": {
          height: "3.5px",
        },
        ".highlight-link:active::before, .highlight-link.active::before": {
          height: "10px",
          "background-color": colors.secondary,
        },
      };

      addUtilities(utilityClasses, ["hover", "active"]);
    },
  ],
};
