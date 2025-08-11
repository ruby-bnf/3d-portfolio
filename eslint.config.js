import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginTailwindcss from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";
import { ReactThreeFiber } from "@react-three/fiber";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      tailwindcss: pluginTailwindcss,
      "@react-three": ReactThreeFiber,
    },
    rules: {
      "tailwindcss/classnames-order": "off", // Disable class order checks
      "tailwindcss/no-custom-classname": "error", // Enable error for invalid Tailwind classnames
      "react/no-unkown-property": "off",
    },
    settings: {
      tailwindcss: {
        config: "./tailwind.config.js",
      },
    },
  },
]);
