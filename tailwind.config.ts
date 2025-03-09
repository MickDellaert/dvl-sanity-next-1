import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        // sans: ["var(--font-montserrat)", "sans-serif"],
        sans: ["var(--font-dmSans)", "sans-serif"],
        golosText: ["var(--font-golosText)", "sans-serif"],
        publicSans: ["var(--font-publicSans)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.15em", // Custom tighter spacing
        subTitle: "-.075em", // Custom tighter spacing
        title: "-.15em", // Custom tighter spacing
        general: "-0.075em",
        // widest: '.25em',     // Custom wider spacing
      },
      padding: {
        x: "24px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
