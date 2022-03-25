# eslint-config-artus

Node Style Guide for Artus and its ecosystem.

## Install

```bash
npm i eslint @artus/eslint-config-artus --save-dev
```

## Usage

- `package.json`

```json
{
  "devDependencies": {
    "@artus/eslint-config-artus": "^1.0.0",
    "eslint": "8"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: '@artus/eslint-config-artus',
};
```

### Use with TypeScript project

- `package.json`

```json
{
  "devDependencies": {
    "@artus/eslint-config-artus": "^1.0.0",
    "typescript": "^4.6.3"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: '@artus/eslint-config-artus/typescript',
  parserOptions: {
    // recommend to use another config file like tsconfig.eslint.json and extends tsconfig.json in it.
    // because you may be need to lint test/**/*.test.ts but no need to emit to js.
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/890
    project: './tsconfig.json'
  }
};
```

- `scripts`

```json
{
  "lint": "eslint . --ext .ts"
}
```

- `settings.json` in vscode

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
  ]
}
```

### Use with Experimental Features

If you want to use eslint-config-egg with experimental features such as `async function`, you should use `@babel/eslint-parser` parser:

- `package.json`

```json
{
  "devDependencies": {
    "@artus/eslint-config-artus": "^1.0.0",
    "eslint": "8",
    "@babel/core": "7",
    "@babel/eslint-parser": "7"
  }
}
```

- `.eslintrc.js`

```js
module.exports = {
  extends: '@artus/eslint-config-artus',
  // for experimental features support
  parser: '@babel/eslint-parser',
  rules: {
    // see https://github.com/eslint/eslint/issues/6274
    'generator-star-spacing': 'off',
    'babel/generator-star-spacing': 'off',
  }
};
```

## License

[MIT](LICENSE)
