const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../11tyBlog/**/*.{njk,md}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
