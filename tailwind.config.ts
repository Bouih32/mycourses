import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ["(var(--font-gilroy))"],
    },

    fontSize: {
      tiny: [
        "6px",
        {
          lineHeight: "9px",
          fontWeight: "400",
        },
      ],
      tinyBold: [
        "6px",
        {
          lineHeight: "8px",
          fontWeight: "700",
        },
      ],
      extraSmall: [
        "8px",
        {
          lineHeight: "12px",
          fontWeight: "400",
        },
      ],
      extraSmallBold: [
        "8px",
        {
          lineHeight: "10px",
          fontWeight: "700",
        },
      ],
      small: [
        "10px",
        {
          lineHeight: "15px",
          fontWeight: "400",
        },
      ],
      smallBold: [
        "10px",
        {
          lineHeight: "14px",
          fontWeight: "700",
        },
      ],
      mediumSmall: [
        "14px",
        {
          lineHeight: "18px",
          fontWeight: "400",
        },
      ],
      mediumSmallBold: [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "700",
        },
      ],
      medium: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
        },
      ],
      mediumBold: [
        "16px",
        {
          lineHeight: "21px",
          fontWeight: "700",
        },
      ],
      mediumLarge: [
        "20px",
        {
          lineHeight: "30px",
          fontWeight: "400",
        },
      ],
      mediumLargeBold: [
        "20px",
        {
          lineHeight: "26px",
          fontWeight: "700",
        },
      ],
      large: [
        "24px",
        {
          lineHeight: "36px",
          fontWeight: "400",
        },
      ],
      largeBold: [
        "24px",
        {
          lineHeight: "31px",
          fontWeight: "700",
        },
      ],
      extraLarge: [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "400",
        },
      ],
      extraLargeBold: [
        "32px",
        {
          lineHeight: "42px",
          fontWeight: "700",
        },
      ],
      veryLarge: [
        "40px",
        {
          lineHeight: "60px",
          fontWeight: "400",
        },
      ],
      veryLargeBold: [
        "40px",
        {
          lineHeight: "52px",
          fontWeight: "700",
        },
      ],
      huge: [
        "48px",
        {
          lineHeight: "72px",
          fontWeight: "400",
        },
      ],
      hugeBold: [
        "48px",
        {
          lineHeight: "62px",
          fontWeight: "700",
        },
      ],
      giant: [
        "61px",
        {
          lineHeight: "92px",
          fontWeight: "400",
        },
      ],
      giantBold: [
        "61px",
        {
          lineHeight: "79px",
          fontWeight: "700",
        },
      ],
    },

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
