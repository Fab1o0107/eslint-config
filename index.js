/* eslint-env node */
const { resolve } = require("path");

module.exports = {
    extends: resolve(require.resolve("@rahagia/eslint-config")),
    rules: {
        "sort-keys": "off",
        "class-methods-use-this": "off",
        "prefer-named-capture-group": "off",
        "no-nested-ternary": "off",
        "no-negated-condition": "off",
        "no-eval": "off"
    }
};
