// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {},    // 👈 MUST be first
    tailwindcss: {},
    autoprefixer: {},
  },
};
