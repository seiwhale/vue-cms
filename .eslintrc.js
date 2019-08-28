module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
    // off或0: 禁用规则
    'linebreak-style': 'off',
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "no-unused-vars": 0,
    "max-len": 0,
    "no-plusplus": 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};