
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
        hero_Bg: "url('./assets/image/webp/hero_Bg.webp')",
        common_Btnbg1: "url('./assets/image/webp/common_Btnbg1.webp')",
        common_Btnbg2: "url('./assets/image/webp/common_Btnbg2.webp')",
        featured_Bg: "url('./assets/image//webp//featured_Bg.webp')",
        slider_Boxbg: "url('./assets/image/webp/slider_Boxbg.webp')",
        ourimpact_Bg: "url('./assets/image/webp/ourimpact_Bg.webp')",
        clients_Bg: "url('./assets/image/webp/clients_Bg.webp')",
        clients_Cardbg: "url('./assets/image/webp/clients_Sliderbg.webp')",
        faq_Bg: "url('./assets/image/webp/faq_Bg.webp')",
        text_Gradient: "linear-gradient(108.48deg, #FF1E2F 8.2%, #3EBFFF 31.38%)",
        clients_Bottom_Border: "url('../src/assets/image/svg/gaming_Bottom_Border.svg')",
        clients_Top_Border: "url('../src/assets/image/svg/gaming_Top_Border.svg')",
        gaming_Bottom_Border: "url('../src/assets/image/svg/gaming_Bottom_Border.svg')",
        gaming_Top_Border: "url('../src/assets/image/svg/gaming_Top_Border.svg')",
        accordian_gradient: "linear-gradient(0deg, #9E0000 -14.1%, #FF1212 123.08%)",
        news_Card: "url('./assets/image/webp/news_Card.webp')",
        news_Top_Border: "url('./assets/image/svg/news_Top_Border.svg')",
        news_Bottom_Border: "url('./assets/image/svg/news_Bottom_Border.svg')",
        ellipse_gradient: "linear-gradient(90deg, #FF1E2F 0%, #3EBFFF 100%)",
        footer_Bg : "url(./assets/image/webp/footer_Bg.webp)"
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

