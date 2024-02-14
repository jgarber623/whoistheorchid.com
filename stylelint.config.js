export default {
  extends: "@jgarber/stylelint-config",
  rules: {
    "value-keyword-case": ["lower", { ignoreKeywords: ["currentColor"] }],
  },
};
