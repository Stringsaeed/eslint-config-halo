module.exports = {
  env: {
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: "detect" },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react",
    "react-hooks",
    "react-native",
    "import",
    // "promise",
  ],
  rules: {
    "no-unused-vars": 2,
    "max-lines": [2, { max: 300, skipBlankLines: true, skipComments: true }],
    "@typescript-eslint/no-shadow": ["error"],
    "no-shadow": 0,
    "no-undef": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "prettier/prettier": 2,
    // "promise/prefer-await-to-then": 1,
    "import/extensions": 0,
    "import/no-dynamic-require": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "import/newline-after-import": ["error", { count: 1 }],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
        ],
      },
    ],
    "react/display-name": 0,
    "react/no-multi-comp": [1, { ignoreStateless: true }],
    "react/no-unused-prop-types": 0,
    "react/prop-types": 1,
    "react/require-default-props": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "react-native/no-unused-styles": 0,
    "react-native/split-platform-components": 0,
    "react-native/no-inline-styles": 1,
    "react-native/no-color-literals": 1,
    "react-native/no-single-element-style-arrays": 2,
    "react-native/no-raw-text": [
      2,
      { skip: ["Button", "Section", "Section.Text"] },
    ],
  },
};
