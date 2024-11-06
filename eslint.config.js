import js from "@eslint/js";
import json from "@eslint/json";

export default [
  js.configs.recommended,
  {
    files: ["**/*.json"],
    language: "json/json",
    ...json.configs.recommended,
  },
];
