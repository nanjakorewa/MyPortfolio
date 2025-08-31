// eslint.config.mjs
import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Ignore patterns
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'next-env.d.ts'],
  },

  // JS recommended rules
  js.configs.recommended,

  // Next.js plugin rules
  {
    name: 'nextjs',
    plugins: { '@next/next': next },
    rules: {
      ...next.configs.recommended.rules,
      // To enable stricter rules:
      // ...next.configs['core-web-vitals'].rules,
    },
  },

  // Disable conflicting formatting rules
  prettierConfig,

  // Prettier as ESLint rule
  {
    name: 'prettier',
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'es5',
        },
      ],
    },
  },
]

