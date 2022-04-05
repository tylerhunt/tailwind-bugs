module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')({
      target: 'legacy', // disable :where() selectors
    }),
  ],
}
