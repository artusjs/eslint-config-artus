'use strict';

const builtin = [
  './lib/rules/es6',
  './lib/rules/es2020',
].map(require.resolve);

module.exports = {
  extends: builtin,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
};
