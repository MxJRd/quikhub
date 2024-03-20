import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://api.github.com/graphql': {
        headers: {
          Authorization: `${process.env.VITE_Github_PAT}`, // Use environment variable for the GitHub token
          'user-agent': 'node.js',
        },
      },
    },
  ],
  pluckConfig: {
    globalGqlIdentifierName: ['gql', 'graphql', 'myCustomGlobalGqlTag']
  },
  generates: {
    'src/generated/': {
      documents: 'src/**.{ts,tsx,gql}', // Updated glob pattern,
      plugins: [],
      preset: 'client'
      // 'src/generated/graphql.ts'
      // plugins: ['typescript', 'typescript-operations'], // Updated plugins
    },
  },
};

export default config;