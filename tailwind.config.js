
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero_bg: "url('./assets/image/webp/hero_bg.webp')",
        common_btnbg: "url('./assets/image/webp/common_btnbg.webp')",
        featured_bg: "url('./assets/image//webp//featured_bg.webp')",
        slider_boxbg: "url('./assets/image/webp/slider_boxbg.webp')",
        ourimpact_bg: "url('./assets/image/webp/ourimpact_bg.webp')",
        clients_bg: "url('./assets/image/webp/clients_bg.webp')",
        clients_cardbg: "url('./assets/image/webp/clients_sliderbg.webp')",
        faq_bg: "url('./assets/image/webp/faq_bg.webp')",
        text_gradient: "linear-gradient(108.48deg, #FF1E2F 8.2%, #3EBFFF 31.38%)",
        clients_bottoborder: "url('../src/assets/image/svg/gaming_bottomborder.svg')",
        clients_topborder: "url('../src/assets/image/svg/gaming_topborder.svg')",
        gaming_bottomborder: "url('../src/assets/image/svg/gaming_bottomborder.svg')",
        gaming_topborder: "url('../src/assets/image/svg/gaming_topborder.svg')",
        accordian_gradient: "linear-gradient(0deg, #9E0000 -14.1%, #FF1212 123.08%)",
        news_card: "url('./assets/image/webp/news_card.webp')",
        news_topborder: "url('./assets/image/svg/news_topborder.svg')",
        news_bottomborder: "url('./assets/image/svg/news_bottomborder.svg')",
        ellipse_gradient: "linear-gradient(90deg, #FF1E2F 0%, #3EBFFF 100%)",
        footer_bg : "url(./assets/image/webp/footer_bg.webp)"
      },
      colors: {
        lightBlack: "#141414",
        darkRed: "#FF1212",
        darkBlue: "#3EBFFF",
        skyBlue: "#3EBFFF",
        blurBlack: "#FFFFFF08",
        gray: "#FFFFFF4D",
        lighterWhite: "#FFFFFF45",
        footerBorder: "#FFFFFF21",
      },
      fontSize: {
        "custom-26": "26px",
        "custom-32": "32px",
        "custom-38": "38px",
        "custom-40": "40px",
        "custom-42": "42px",
        "custom-64": "64px",
      },
      backgroundSize: {
        full: "100%  100%",
      },

    },
  },
  plugins: [],
};

