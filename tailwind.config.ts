import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        "ba-desaturated-red": "hsl(0, 36%, 70%)",
        "ba-soft-red": "hsl(0, 93%, 68%)",
        // Neutral
        "ba-dark-grayish-red": "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        // Gradients
        // Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%)
        // Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%)
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      fontWeight: {
        normal: "300",
        semibold: "400",
        bold: "600"
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
