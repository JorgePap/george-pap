/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "801px",
      lg: "1025px",
      xl: "1441px",
    },
    colors: {
      red: {
        5: "#400707",
        4: "#760A0A",
        3: "#FD0005",
        2: "#E46767",
        1: "#F7E0CF",
      },
      blue: {
        5: "#071040",
        4: "#0A1A76",
        3: "#0428F2",
        2: "#677AE4",
        1: "#CFD5F7",
      },
      green: {
        5: "052E05",
        4: "0D730D",
        3: "06C606",
        2: "67E467",
        1: "BEF4BE",
      },
      neutral: {
        10: "#1C1B17",
        9: "#35342C",
        8: "#4F4C40",
        7: "#686555",
        6: "#817D6A",
        5: "#989481",
        4: "#ACA99A",
        3: "#C1BFB3",
        2: "#D6D4CD",
        1: "#EAEAE6",
      },
      dark: {
        1: "#22212C"
      },
      light: {
        2: "#F8F8F2",
        1: "#BCBCBF"
      },
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    fontSize: {
      "2xs": "var(--text-2xs)",
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      base: "var(--text-base)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      "2xl": "var(--text-2xl)",
      "3xl": "var(--text-3xl)",
      "4xl": "var(--text-4xl)",
    },
    fontWeight: {
      bold: "var(--weight-bold)",
      medium: "var(--weight-medium)",
      regular: "var(--weight-regular)",
    },
    lineHeight: {
      heading: "var(--line-height-heading)",
      body: "var(--line-height-body)",
    },
    borderRadius: {
      circle: "50%",
      "2xl": "4rem",
      xl: "3rem",
      lg: "2rem",
      md: "1rem",
      sm: "0.5rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      full: "9999px",
    },
    transitionDuration: {
      200: "200ms",
      300: "300ms",
      500: "500ms",
    },
    transitionTimingFunction: {
      "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    extend: {
      animation: {
        'scroll-down': 'slide-2 0.4s infinite alternate cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'slide-2': {
          'to': {
            transform: 'translateY(4px)',  // Adjust this as needed
          }
        },
      },
      darkMode: {
        bg: "background",
      },
      transitionProperty: {
        bg: "background, border",
        spacing: "margin, padding",
        color: "color",
      },
      spacing: {
        "9xl": "var(--spacing-9xl)",
        "8xl": "var(--spacing-8xl)",
        "7xl": "var(--spacing-7xl)",
        "6xl": "var(--spacing-6xl)",
        "5xl": "var(--spacing-5xl)",
        "4xl": "var(--spacing-4xl)",
        "3xl": "var(--spacing-3xl)",
        "2xl": "var(--spacing-2xl)",
        xl: "var(--spacing-xl)",
        lg: "var(--spacing-lg)",
        md: "var(--spacing-md)",
        sm: "var(--spacing-sm)",
        xs: "var(--spacing-xs)",
        "2xs": "var(--spacing-2xs)",
      },
    },
  },
  plugins: [ function ({ addUtilities }) {
    const newUtilities = {
      '.text-stroke-white': {
        '-webkit-text-stroke': '1px white',
      },
      '.text-stroke-black': {
        '-webkit-text-stroke': '1px black',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover', 'dark']);
  },],
  darkMode: "class", // Enable dark mode with the 'class' strategy
};
