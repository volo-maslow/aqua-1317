import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    // eslint-disable-next-line prettier/prettier
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      'prettier/prettier': ['error'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 1,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'max-len': [
        1,
        120,
        {
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [1],
    },
    plugins: {
      prettier,
    },
  },
);