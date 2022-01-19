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
        bgSecondaryLight: 'var(--color-300)',
      },
      container: {
        padding: {
          DEFAULT: 'var(--container-default-padding)',
          xl: 'var(--container-xl-padding)',
        },
      },
      boxShadow: {
        accentMain: 'var(--box-shadow-primary)',
        accentMainHover: 'var(--box-shadow-secondary)',
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