/* eslint-env node */
const { resolve } = require("path");

/** @type {import("eslint").ESLint.ConfigData} */
module.exports = { extends: resolve(__dirname, "index.js"), env: { node: true } };
