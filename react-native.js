module.exports = {
  extends: "@callstack",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react", "react-native"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "tsconfig.json",
      },
    },
  },
  rules: {
    "no-irregular-whitespace": 0,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react/display-name": 0,
    "react-native/no-raw-text": [
      0,
      {
        skip: ["Section", "Button"],
      },
    ],
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
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
    "import/newline-after-import": ["error", { count: 1 }],
  },
};
