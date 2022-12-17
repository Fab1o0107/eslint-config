/* eslint-env node */
const { resolve } = require("path");
const base = resolve(__dirname, "..", "index.js");

/** @type {import("@typescript-eslint/utils").TSESLint.Linter.Config} */
module.exports = {
    extends: [base, resolve(require.resolve("@clytage-pkg/eslint-config/typescript"))],
    rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/no-dynamic-delete": "off",
        "@typescript-eslint/no-shadow": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-base-to-string": "off",
        "@typescript-eslint/sort-type-union-intersection-members": "off",
        "@typescript-eslint/member-ordering": "off",
        ...require(base).rules
    }
};
