module.exports = {
  'extends': [
    'airbnb-base',
    'plugin: react/recommended
  ],
  'parserOptions' :{
    'ecmaFeatures' : {
      'jsx': true
    }
  },
  'rules': {
    'no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    'no-console': ["error", { 'allow': ["warn", "error"] }]
  },


};
