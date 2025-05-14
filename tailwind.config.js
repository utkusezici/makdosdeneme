module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      }
    },
    extend: {
      backgroundImage: (theme) => ({
        'homebg': "url('/homebg.webp')",
        "hero-gradient": "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(75,162,234,0.5),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(21,149,234,0.1),transparent)",
        "glow-lines": "linear-gradient(var(--direction),#6893e8 0.43%,#9bb7f0 14.11%,rgba(120,119,198,0) 62.95%)",
        "glow-lines-top": "linear-gradient(var(--direction),#E2E8F0 0.43%,#fffdff 14.11%,rgba(120,119,198,0) 62.95%)",
        'homePricingbg': "url('/homePricingbg.webp')",
        "pageTitleSectionbg": "url('/pageTitleSectionbg.png')",
        "aboutbg": "url('/aboutbg.png')",
        "faqbg": "url('/faqbg.png')",
      }),
      colors: {
        'marine-blue-900': '#010f2b',
        'marine-blue-600': '#033cae',
        'marine-blue-700': '#022d82',
        'marine-blue-500': '#044bd9',
        'marine-blue-400': '#366fe1',
        'marine-blue-300': '#6893e8',
        'marine-blue-200': '#9bb7f0',
        'marine-blue-100': '#cddbf7',
        'marine-blue-800': '#021e57',
        info500: "#2E90FA",
        info100: "#D1E9FF",
        attention500: "#F79009",
        attention100: "#FEF0C7",
        error500: "#F04438",
        error100: "#FEE4E2",
        success500: "#12B76A",
        success100: "#D1FADF",
        borderColor: "#E2E8F0"
      },
      width: {
        22: '5.6rem',
        50: '12.5rem',
        90: '23rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
      },
      height: {
        22: '5.6rem',
        50: '12.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        150: '40rem',
        180: '50rem'
      },
      maxHeight: {
        "198px": "198px",
        "440px": '440px',
        "336px": '336px',
        "740px": '740px',

      },
      inset: {
        22: '5.6rem',
        50: '12.5rem',
        100: '25rem',
        104: '26rem',
        108: '27rem',
        112: '28rem',
        116: '29rem',
        120: '30rem',
        'a4': '795px'
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0, transform: "translateY(-10px)" },
          to: { opacity: 1, transform: "none" },
        },
        "image-rotate": {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(0.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
        "image-glow": {
          "0%": {
            opacity: 0,
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "10%": {
            opacity: 1,
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "100%": {
            opacity: 0.2,
          },
        },
        "sketch-lines": {
          "0%": { "stroke-dashoffset": 1 },
          "50%": { "stroke-dashoffset": 0 },
          "99%": { "stroke-dashoffset": 0 },
          "100%": { visiblity: "hidden" },
        },
        "glow-line-horizontal": {
          "0%": { opacity: 0, transform: "translateX(0)" },
          "5%": { opacity: 1, transform: "translateX(0)" },
          "90%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateX(min(60vw, 45rem))" },
        },
        "glow-line-vertical": {
          "0%": { opacity: 0, transform: "translateY(0)" },
          "5%": { opacity: 1, transform: "translateY(0)" },
          "90%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
        },
        zap: {
          "0%, 9%, 11%, 100% ": {
            fill: "transparent",
          },
          "10%": {
            fill: "white",
          },
        },
        bounce: {
          "50%": {
            transform: "scale(0.98)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
        "image-rotate": "image-rotate 1400ms ease forwards",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
        "sketch-lines": "sketch-lines 1200ms ease-out forwards",
        "glow-line-horizontal":
          "glow-line-horizontal var(--animation-duration) ease-in forwards",
        "glow-line-vertical":
          "glow-line-vertical var(--animation-duration) ease-in forwards",
        zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
        bounce: "240ms ease 0s 1 running bounce",
      },



    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
