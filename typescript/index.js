/* eslint-disable sort-keys */
/* eslint-env node */
const { resolve } = require("path");

module.exports = {
    extends: [resolve(__dirname, "..", "index.js"), resolve(require.resolve("@rahagia/eslint-config/typescript"))],
    rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off"
    }
};
