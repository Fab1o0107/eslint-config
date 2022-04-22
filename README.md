# eslint-config
> An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) that I used in my projects ✔

<div align="center">
<a href="https://www.npmjs.com/package/@fab1o0107/eslint-config"><img src="https://img.shields.io/npm/v/@fab1o0107/eslint-config?maxAge=3600" alt="NPM version" ><a/>
</div>

## Install

```bash
npm install -D @fab1o0107/eslint-config
```
or with yarn
```bash
yarn add -D @fab1o0107/eslint-config
```

## Usage

ESLint guide: [link](https://eslint.org/docs/user-guide/configuring#using-a-shareable-configuration-package)

Example:
```json
{
	"extends": "@fab1o0107/eslint-config"
}
```
or `"@fab1o0107/eslint-config/node"` for Node environment


Example (TS):
```json
{
    "extends": "@fab1o0107/eslint-config/typescript"
}
```
or `"@fab1o0107/eslint-config/typescript/node"` for Node environment

## Note

Requires [ESLint](https://npmjs.com/package/eslint) version 8.12.0 or above

TypeScript config requires:
 * [@typescript-eslint/parser](https://npmjs.com/package/@typescript-eslint/parser) version 5.20.0 or above
 * [@typescript-eslint/eslint-plugin](https://npmjs.com/package/@typescript-eslint/eslint-plugin) version 5.20.0 or above
 * [typescript](https://npmjs.com/package/typescript) version 3.3.1 to 4.7.0