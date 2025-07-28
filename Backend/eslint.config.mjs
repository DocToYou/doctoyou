/*
 * ESLint Configuration for Backend
 * This configuration is tailored for a Node.js environment with ECMAScript 2021 features.
 * It includes rules to enforce code quality and best practices.
 * It also allows console statements and process.env usage for debugging purposes.
 * Created and written by Dheena Krishna on 2025-07-27
 */
// Importing necessary modules for ESLint configuration

import js from "@eslint/js"; // Importing the recommended ESLint configuration for JavaScript
import globals from "globals"; // Importing global variables for different environments such as Node.js and browser
import { defineConfig } from "eslint/config"; // Importing the defineConfig function to create a configuration object

// Defining the ESLint configuration
// This configuration applies to all JavaScript files in the project
// It extends the recommended rules from ESLint and includes custom rules for better code quality
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], // Targeting all JavaScript files
    plugins: { js },
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
      "no-unused-vars": "warn", // Warn about unused variables
      "no-undef": "error", // Warn about undefined variables
      "no-console": "off", // Allow console statements for debugging
      "no-process-env": "off", // Allow process.env usage
      semi: ["error", "always"], // Enforce semicolons at the end of statements
    },
  },
]);
