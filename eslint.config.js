import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginNoRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node
    },
    plugins: {
      js,
      'no-relative-import-paths': eslintPluginNoRelativeImportPaths
    },
    extends: ['js/recommended', eslintPluginImportX.flatConfigs.recommended],
    settings: {
      'import-x/resolver': {
        typescript: { project: 'jsconfig.json' }
      }
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true }
      ],
      'no-unused-vars': [
        'error',
        { ignoreRestSiblings: true, argsIgnorePattern: 'next' }
      ]
    }
  }
]);
