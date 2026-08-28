import js from '@eslint/js'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettierConfig from 'eslint-config-prettier'
import boundaries from 'eslint-plugin-boundaries'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'
import pluginVue from 'eslint-plugin-vue'
import vueA11y from 'eslint-plugin-vuejs-accessibility'

export default withVueTs(
  {
    ignores: ['dist/**', 'coverage/**', 'node_modules/**', '**/*.min.*'],
  },

  js.configs.recommended,
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,
  vueA11y.configs['flat/recommended'],

  // eslint.config.ts e commitlint.config.js estão fora de qualquer tsconfig;
  // aceitos pelo project service (single files, sem `**`).
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.*', 'commitlint.config.*'],
        },
      },
    },
  },

  // ── Limites de arquitetura (módulos por domínio) ──
  {
    plugins: { boundaries },
    settings: {
      // Necessário para o boundaries resolver os aliases de path (@/, @modules/, @shared/, @core/)
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        // `src/modules/site/*` (sem `/**`): na v5 do plugin, `**` faz cada subpasta virar
        // um elemento. Sem o `**`, cada módulo é UM elemento e imports internos são INTERNAL.
        { type: 'module-site', pattern: 'src/modules/site/*' },
        { type: 'module-admin', pattern: 'src/modules/admin/*' },
        { type: 'shared', pattern: 'src/shared/**' },
        { type: 'core', pattern: 'src/core/**' },
      ],
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            // shared e core não podem depender de nenhum módulo de negócio
            { from: 'shared', allow: ['shared', 'core'] },
            { from: 'core', allow: ['core'] },
            // módulos de negócio podem usar shared/core e a si mesmos, nunca outro módulo diretamente
            { from: 'module-site', allow: ['module-site', 'shared', 'core'] },
            { from: 'module-admin', allow: ['module-admin', 'shared', 'core'] },
            { from: 'app', allow: ['app', 'module-site', 'module-admin', 'shared', 'core'] },
          ],
        },
      ],
      // um módulo só pode ser importado pelo seu barrel (index.ts) — nunca por caminho interno.
      // app/shared/core não têm barrel obrigatório: qualquer caminho interno é permitido.
      'boundaries/entry-point': [
        'error',
        {
          default: 'disallow',
          rules: [
            { target: ['module-site', 'module-admin'], allow: 'index.ts' },
            { target: ['app', 'shared', 'core'], allow: '**' },
          ],
        },
      ],
    },
  },

  // ── Regras específicas do projeto (anti god-class / anti magic numbers) ──
  {
    plugins: { 'unused-imports': unusedImports, perfectionist },
    rules: {
      // Sem código morto
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],

      // Sem valores mágicos — força constante nomeada (ver constants/ de cada módulo)
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [-1, 0, 1, 2, 100], // paginação/índices/porcentagens triviais
          ignoreArrayIndexes: true,
          ignoreEnums: true,
          ignoreDefaultValues: true,
          detectObjects: false,
        },
      ],

      // Sem "any" disfarçado — reforça tipagem explícita definida nas convenções
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // delega para unused-imports acima

      // Sem god classes/componentes — limites objetivos de tamanho e complexidade
      complexity: ['warn', 10],
      'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['warn', { max: 60, skipBlankLines: true, skipComments: true }],
      'max-params': ['warn', 4],
      'max-classes-per-file': ['error', 1],
      'max-depth': ['warn', 3],

      // Vue: componentes de UI não viram "god components"
      'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
      'vue/no-setup-props-reactivity-loss': 'error',
      'vue/require-typed-ref': 'warn',
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      // Nomes single-word já estabelecidos no projeto (mantém a regra ativa para novos componentes)
      'vue/multi-word-component-names': [
        'error',
        { ignores: ['Home', 'About', 'Blog', 'Contact', 'Gallery', 'Lightbox'] },
      ],
      'vue/no-required-prop-with-default': 'error',
      'vue/no-unused-refs': 'warn',
      'vue/padding-line-between-blocks': 'warn',

      // Ordenação determinística de imports (elimina diffs de reordenação)
      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'natural',
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          newlinesBetween: 'always',
        },
      ],
    },
  },

  // ── Sobrescritas por camada dentro de cada módulo ──
  {
    // data/*.mock.ts e data/*.service.ts: permitir funções um pouco maiores (mapeamento de dados)
    files: ['**/data/*.ts'],
    rules: { 'max-lines-per-function': ['warn', { max: 80 }] },
  },
  {
    // arquivos de teste: menos rígido em tamanho/complexidade; testes unitários
    // precisam acessar internals de componentes, então ficam fora das regras de boundaries
    files: ['**/*.spec.ts', 'tests/**/*.ts'],
    rules: {
      'max-lines-per-function': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'boundaries/element-types': 'off',
      'boundaries/entry-point': 'off',
    },
  },
  {
    // eslint.config.ts: os números são os thresholds das regras — propósito do arquivo
    files: ['eslint.config.*'],
    rules: { '@typescript-eslint/no-magic-numbers': 'off' },
  },
  {
    // constants/*: é o único lugar onde números "soltos" são o próprio propósito do arquivo
    files: ['**/constants/*.ts'],
    rules: { '@typescript-eslint/no-magic-numbers': 'off' },
  },
  {
    // mocks: arquivos de dados estáticos (listas literais), não lógica — limites de tamanho não se aplicam
    files: ['**/*.mock.ts'],
    rules: { 'max-lines': 'off' },
  },

  prettierConfig, // sempre por último — desliga regras de formatação
)
