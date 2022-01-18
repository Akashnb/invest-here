module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/website/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accentMain: 'var(--color-accent-main)',
        textAccentDark: 'var(--color-dark)',
        textAccentMedium: 'var(--color-medium)',
        bgPrimaryMain: 'var(--color-100)',
        bgSecondaryMain: 'var(--color-200)',
      },
      container: {
        padding: {
          DEFAULT: 'var(--container-default-padding)',
          xl: 'var(--container-xl-padding)',
        },
      },
      boxShadow: {
        accentMain: '0 4px 20px -5px rgb(66 133 244 / 40%)',
        accentMainHover: '0 5px 30px -5px rgb(66 133 244 / 70%)',
      },
    },
    fontFamily: {
      display: 'var(--font-display)',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}