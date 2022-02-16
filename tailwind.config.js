module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      primary: 'rgba(15, 55, 90, 1)',
      secondary: 'rgba(44, 162, 202, 1)',
      skyblue: 'rgba(233, 245, 249, 1)',
      tertiary: 'rgba(246, 152, 37, 1)',
      gray: '#E4E4E4',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '2.25rem',
      xl: '3rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'bg-heading': "url('../assets/icons/line.svg')",
      'bg-contact': "url('../assets/images/contact-area.png');",
      'bg-world': "url('../assets/images/world.svg')",
      'bg-section': "url('../assets/images/bg-net.svg')",
    },
  },

  plugins: [],
};
