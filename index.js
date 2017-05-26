module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: 'prettier',
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  'rules': {
    "prettier/prettier": ["error", {
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true
    }]
  }
}