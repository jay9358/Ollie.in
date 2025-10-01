module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Optimize autoprefixer for better performance
      flexbox: 'no-2009', // Don't add prefixes for flexbox 2009 spec
      grid: 'autoplace', // Enable CSS Grid autoplacement
    },
  },
}
