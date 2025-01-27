import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primary)",
        secondaryColor: "var(--secondary)",
        accentColor: "var(--accent)",
        Body: "var(--text-body)",
        Light: "var(--text-light)",
        Dark: "var(--text-dark)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      listStyleImage: {
        myAccent: "url('/check.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
