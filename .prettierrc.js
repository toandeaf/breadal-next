module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'always',
  endOfLine: 'lf',
  printWidth: 80,
  overrides: [
    {
      files: '*.less',
      options: {
        singleQuote: false,
        printWidth: 120,
      },
    },
  ],
}
