module.exports = {
  extends: [
    "airbnb-base"
  ],
  plugins: [
      "import"
  ],
  rules: {
    "space-before-function-paren": [0],
    "indent": ["error", 2],
    "no-use-before-define": [0],
    "comma-dangle": [2, "never"]
  }
};
