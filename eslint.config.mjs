import js from '@eslint/js'
import globals from 'globals'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'
import pluginCypress from 'eslint-plugin-cypress/flat'

export default defineConfig([
  { ignores: ['package-lock.json'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, pluginCypress },
    extends: ['js/recommended', pluginCypress.configs.recommended],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'cypress/no-xpath': 'error',
      'indent': [ 'error', 2 ],
      'linebreak-style': [ 'error', 'unix' ],
      'quotes': [ 'error', 'single' ],
      'semi': [ 'error', 'never' ],
      'no-trailing-spaces': [ 'error' ],
      'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 } ],
      'eol-last': [ 'error' ]
    }
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json', extends: ['json/recommended'] },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm', extends: ['markdown/recommended'] },
])
