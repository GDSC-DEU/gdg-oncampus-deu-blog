/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'css',
  embeddedLanguageFormatting: 'off',
  plugins: ['prettier-plugin-import-sort'], // 플러그인 추가
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
