const reactRecommended = require('eslint-plugin-react/configs/recommended');


module.exports = [
  reactRecommended,
  {
    languageOptions: {
      "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      globals: {
        "es6": true,
        "browser": true,
        "node": true
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    "rules": {
      "react/prop-types": 0,
      "linebreak-style": 1,
      "no-unused-vars": 1,
      "react/react-in-jsx-scope": 0,
    },
  }
];