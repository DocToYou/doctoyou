/*
 * ESLint Configuration for Backend
 * This configuration is tailored for a Node.js environment with ECMAScript 2021 features.
 * It includes rules to enforce code quality and best practices.
 * It also allows console statements and process.env usage for debugging purposes.
 * Created and written by Dheena Krishna on 2025-07-27
 */
// Importing necessary modules for ESLint configuration
import eslintPluginNode from "eslint-plugin-node";
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], // Targeting all JavaScript files
    plugins: {
      js,
      node: eslintPluginNode,
      security: eslintPluginSecurity,
      //import: eslintPluginImport,
      //promise: eslintPluginPromise,
    },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node, // adding Node.js globals
        ...globals.es2021, // adding ECMAScript 2021 globals
      },
    },
    rules: {
      // ✅ Core Best Practices
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      //'no-console': 'warn',
      "no-debugger": "error",
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-mixed-spaces-and-tabs": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      semi: ["error", "always"],
      indent: ["error", 2, { SwitchCase: 1 }],
      //'no-nested-ternary': 'warn',

      // // 🔒 Security
      "security/detect-object-injection": "warn",

      // // 📦 Node.js Specific
      "node/no-missing-import": "off",
      "node/no-unpublished-import": "off",

      // // 📥 Import Rules
      // 'import/order': ['error', {
      //   groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      //   'newlines-between': 'always',
      // }],
      // 'import/no-unresolved': 'error',
      // 'import/newline-after-import': 'error',

      // // ⏳ Promises
      // 'promise/always-return': 'warn',
      // 'promise/no-nesting': 'warn',
      // 'promise/no-return-wrap': 'warn',
    },
  },
]);
