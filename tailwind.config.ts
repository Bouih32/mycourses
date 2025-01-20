import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./globals.css",
  ],
  theme: {
    fontFamily: {
      gilroy: ["(var(--font-gilroy))"],
    },
    fontSize: {
      "6sm": [
        "6px",
        {
          lineHeight: "9px",
          fontWeight: "400",
        },
      ],
      "6lg": [
        "6px",
        {
          lineHeight: "8px",
          fontWeight: "700",
        },
      ],
      "8sm": [
        "8px",
        {
          lineHeight: "12px",
          fontWeight: "400",
        },
      ],
      "8lg": [
        "8px",
        {
          lineHeight: "10px",
          fontWeight: "700",
        },
      ],
      "10sm": [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "400",
        },
      ],
      "10lg": [
        "10px",
        {
          lineHeight: "14px",
          fontWeight: "700",
        },
      ],
      "12sm": [
        "12px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      "14sm": [
        "14px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      "12lg": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "700",
        },
      ],
      "16sm": [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      "16lg": [
        "16px",
        {
          lineHeight: "21px",
          fontWeight: "700",
        },
      ],
      "20sm": [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      "20lg": [
        "20px",
        {
          lineHeight: "26px",
          fontWeight: "700",
        },
      ],
      "24sm": [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "400",
        },
      ],
      "24lg": [
        "24px",
        {
          lineHeight: "31px",
          fontWeight: "700",
        },
      ],
      "32sm": [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "400",
        },
      ],
      "32lg": [
        "32px",
        {
          lineHeight: "42px",
          fontWeight: "700",
        },
      ],
      "40sm": [
        "40px",
        {
          lineHeight: "60px",
          fontWeight: "400",
        },
      ],
      "40lg": [
        "40px",
        {
          lineHeight: "52px",
          fontWeight: "700",
        },
      ],
      "48sm": [
        "48px",
        {
          lineHeight: "72px",
          fontWeight: "400",
        },
      ],
      "48lg": [
        "48px",
        {
          lineHeight: "62px",
          fontWeight: "700",
        },
      ],
      "61sm": [
        "61px",
        {
          lineHeight: "92px",
          fontWeight: "400",
        },
      ],
      "61lg": [
        "61px",
        {
          lineHeight: "79px",
          fontWeight: "700",
        },
      ],
    },
    extend: {
      screens: {
        laptop: "1200px",
      },
      backgroundImage: {
        loginGrad:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.39) 34.31%, rgba(0, 0, 0, 0.00) 100%)",
        promoImage:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.88) 100%)",
        expertGradient:
          "linear-gradient(180deg, rgba(201, 59, 59, 0.00) 39.22%, rgba(0, 0, 0, 0.50) 100%)",
        hero: "url(@/images/heroImage.png)",
        login: "url(@/images/loginImage.png)",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        main: "#3DCBB1",
        second: "#FFD130",
        shade40: "#EC9792",
        shade60: "#E56D67",
        shade80: "#C42A22",
        shade: "#98211A",
        dark: "#1B1B1B",
        black90: "#1B1B1BE5",
        black60: "#1B1B1B99",
        black30: "#1B1B1B1A",
        white90: "#F9F9F9E5",
        white60: "#F9F9F999",
        white30: "#F9F9F94D",
        error: "#FE416D",
        warning: "#A04AE3",
        success: "#00DDC0",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
