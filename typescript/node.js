/* eslint-env node */
const { resolve } = require("path");

/** @type {import("eslint").ESLint.ConfigData["extends"]} */
module.exports.extends = [resolve(__dirname, "..", "node.js"), resolve(__dirname, "index.js")];
