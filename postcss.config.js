const myScript = require('./src/style/function/script');

module.exports = ({ ctx }) => ({
  map: true,
  from: undefined,
  plugins: {
    "postcss-import": { root: "src/style" },
    autoprefixer: {},
    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-functions": {functions: {
      rem: myScript.rem,
      getColor: myScript.getColor
    }},
    "postcss-simple-vars": {},
    "postcss-extend": {},
    cssnano: ctx === "production" ? {} : false,
  },
});
