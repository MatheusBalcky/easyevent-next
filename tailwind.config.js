/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#26CC88",
        "yellow-title": "#FFFD47",
        roxo: "#C516FF",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "swing-in-top-fwd": {
          "0%": {
            "-webkit-transform": "rotateX(-100deg)",
            transform: "rotateX(-100deg)",
            "-webkit-transform-origin": "top",
            "transform-origin": "top",
            opacity: "0",
          },
          "100%": {
            "-webkit-transform": "rotateX(0deg)",
            transform: "rotateX(0deg)",
            "-webkit-transform-origin": "top",
            "transform-origin": "top",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "pulse-fast": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0px)" },
        },
        rotate: {
          "0%": { transform: " " },
          "100%": { transform: "" },
        },
      },
      animation: {
        wiggle: "wiggle 3s linear infinite",
        "swing-in-top-fwd": "swing-in-top-fwd 3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
        "swing-in-top-fwd-rotate": "rotate,swing-in-top-fwd 3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both",
        "fade-in": "fade-in 1s linear",
        "pulse-fast": "pulse-fast 1s linear infinite",
      },
    },
  },
  plugins: [],
};
