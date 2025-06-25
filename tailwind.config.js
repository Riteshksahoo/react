export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepTeal: "#627e75",
        warmBeige: "#d2a985",
        skyBlue: "#226ba3",
        sunnyYellow: "#e9c429",
        richMaroon: "#913639",
        darkBg: "#1a1a1a",
      },
      backgroundImage: {
        'header-gradient': 'linear-gradient(to right, #627e75, #314f46)',
        'footer-gradient': 'linear-gradient(to left, #627e75, #314f46)',
        'body-gradient': 'linear-gradient(to bottom, #1a1a1a, #2a2a2a)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
