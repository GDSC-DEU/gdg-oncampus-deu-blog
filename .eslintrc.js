/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@repo/eslint-config/next.js'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.tsx', '.json', '.css'],
      },
    },
  },
  ignorePatterns: [
    '.*.js',
    '*.config.js',
    'src/models/**',
    'src/types/apis/**',
  ],
};
