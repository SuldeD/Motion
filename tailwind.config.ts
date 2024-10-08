import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gray: {
          1000: "hsl(var(--gray-1000))",
          1: "hsl(var(--gray-1))",
          2: "hsl(var(--gray-2))",
          3: "hsl(var(--gray-3))",
          4: "hsl(var(--gray-4))",
          5: "hsl(var(--gray-5))",
          6: "hsl(var(--gray-6))",
          10: "hsl(var(--gray-10))",
          11: "hsl(var(--gray-11))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ds: {
          background: {
            100: "hsl(var(--ds-background-100))",
            200: "hsl(var(--ds-background-200))",
          },

          gray: {
            100: "hsl(var(--ds-gray-100))",
            200: "hsl(var(--ds-gray-200))",
            300: "hsl(var(--ds-gray-300))",
            400: "hsl(var(--ds-gray-400))",
            500: "hsl(var(--ds-gray-500))",
            600: "hsl(var(--ds-gray-600))",
            700: "hsl(var(--ds-gray-700))",
            800: "hsl(var(--ds-gray-800))",
            900: "hsl(var(--ds-gray-900))",
            1000: "hsl(var(--ds-gray-1000))",
          },

          blue: {
            100: "var(--ds-blue-100)",
            200: "var(--ds-blue-200)",
            300: "var(--ds-blue-300)",
            400: "var(--ds-blue-400)",
            500: "var(--ds-blue-500)",
            600: "var(--ds-blue-600)",
            700: "var(--ds-blue-700)",
            800: "var(--ds-blue-800)",
            900: "var(--ds-blue-900)",
            1000: "var(--ds-blue-1000)",
          },

          red: {
            100: "var(--ds-red-100)",
            200: "var(--ds-red-200)",
            300: "var(--ds-red-300)",
            400: "var(--ds-red-400)",
            500: "var(--ds-red-500)",
            600: "var(--ds-red-600)",
            700: "var(--ds-red-700)",
            800: "var(--ds-red-800)",
            900: "var(--ds-red-900)",
            1000: "var(--ds-red-1000)",
          },

          amber: {
            100: "var(--ds-amber-100)",
            200: "var(--ds-amber-200)",
            300: "var(--ds-amber-300)",
            400: "var(--ds-amber-400)",
            500: "var(--ds-amber-500)",
            600: "var(--ds-amber-600)",
            700: "var(--ds-amber-700)",
            800: "var(--ds-amber-800)",
            900: "var(--ds-amber-900)",
            1000: "var(--ds-amber-1000)",
          },

          green: {
            100: "var(--ds-green-100)",
            200: "var(--ds-green-200)",
            300: "var(--ds-green-300)",
            400: "var(--ds-green-400)",
            500: "var(--ds-green-500)",
            600: "var(--ds-green-600)",
            700: "var(--ds-green-700)",
            800: "var(--ds-green-800)",
            900: "var(--ds-green-900)",
            1000: "var(--ds-green-1000)",
          },

          teal: {
            100: "var(--ds-teal-100)",
            200: "var(--ds-teal-200)",
            300: "var(--ds-teal-300)",
            400: "var(--ds-teal-400)",
            500: "var(--ds-teal-500)",
            600: "var(--ds-teal-600)",
            700: "var(--ds-teal-700)",
            800: "var(--ds-teal-800)",
            900: "var(--ds-teal-900)",
            1000: "var(--ds-teal-1000)",
          },

          purple: {
            100: "var(--ds-purple-100)",
            200: "var(--ds-purple-200)",
            300: "var(--ds-purple-300)",
            400: "var(--ds-purple-400)",
            500: "var(--ds-purple-500)",
            600: "var(--ds-purple-600)",
            700: "var(--ds-purple-700)",
            800: "var(--ds-purple-800)",
            900: "var(--ds-purple-900)",
            1000: "var(--ds-purple-1000)",
          },

          pink: {
            100: "var(--ds-pink-100)",
            200: "var(--ds-pink-200)",
            300: "var(--ds-pink-300)",
            400: "var(--ds-pink-400)",
            500: "var(--ds-pink-500)",
            600: "var(--ds-pink-600)",
            700: "var(--ds-pink-700)",
            800: "var(--ds-pink-800)",
            900: "var(--ds-pink-900)",
            1000: "var(--ds-pink-1000)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      grayscale: {
        filter: "hsl(var(--grayscale-filter))",
      },
      keyframes: {
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "in-b": {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "in-b": "in-b .6s both",
        "in-reverse": "in-reverse .6s both",
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
