// eslint.config.mjs
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import next from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  // 無視パターン
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'next-env.d.ts'],
  },

  // JS/TS の推奨
  js.configs.recommended,
  ...tseslint.configs.recommended, // 型情報なしの推奨（高速・十分実用）

  // Next.js プラグイン（core-web-vitals 相当を適用）
  {
    name: 'nextjs',
    plugins: { '@next/next': next },
    rules: {
      ...next.configs.recommended.rules,
      // さらに厳しくしたい場合は下を有効化
      // ...next.configs['core-web-vitals'].rules,
    },
  },

  // Prettier 連携（競合ルールを無効化）
  prettierConfig,

  // Prettier を ESLint エラーに反映
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

  // TS/TSX ファイル向けの追加設定例（必要に応じて）
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // 例: React 19 前提なら jsx-runtime なので react/react-in-jsx-scope は不要
      // 'react/react-in-jsx-scope': 'off',
    },
  },
]
