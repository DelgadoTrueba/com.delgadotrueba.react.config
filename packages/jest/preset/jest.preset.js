/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: '@delgadotrueba/react-config/jest-preset',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  clearMocks: true,
  testTimeout: 60000,
  resetMocks: false,
  restoreMocks: false,

  transform: {
    '^.+\\.(ttf|woff|woff2|png|jpg|svg|pdf)$': '@delgadotrueba/react-config/jest-preset/src/transformers/fileTransformer.js',
    '^.+\\.(mp3)$': '@delgadotrueba/react-config/jest-preset/src/transformers/fileTransformer.js',
    '^.+\\.(css|scss|sass)$': '@delgadotrueba/react-config/jest-preset/src/transformers/styleTransformer.js',
    '^.+\\.(md|mdx)$': '@delgadotrueba/react-config/jest-preset/src/transformers/markdownTransformer.js',
  },

  collectCoverage: true,
  coverageReporters: ['text-summary', 'json-summary', 'json', 'html', 'clover', 'lcovonly'],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      functions: 40,
      lines: 40,
    },
  },
};

// transformIgnorePatterns: [
//     'node_modules/(?!(?:@babel-dcfront/react-i18next|@babel-dcfront/react-http|@babel-dcfront/react-datetime|@babel-dcfront/featureflags|@babel-dcfront/react-model)/)',
//   ],
//   moduleNameMapper: {
//     ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
//     '\\.(css|scss|sass)$': '<rootDir>/src/utils-test/mockFiles.ts',
//     '^@babel-dcfront/react-i18next$':
//       '<rootDir>/node_modules/@babel-dcfront/react-i18next/dist/js/src/index.js',
//     '^@babel-dcfront/react-http$':
//       '<rootDir>/node_modules/@babel-dcfront/react-http/dist/js/src/index.js',
//     '^@babel-dcfront/react-datetime$':
//       '<rootDir>/node_modules/@babel-dcfront/react-datetime/dist/js/src/index.js',
//     '^@babel-dcfront/catalogo-ui$':
//       '<rootDir>/node_modules/@babel-dcfront/catalogo-ui/dist/js/index.js',
//     '^@babel-dcfront/featureflags$':
//       '<rootDir>/node_modules/@babel-dcfront/featureflags/dist/js/index.js',
//     '^@babel-dcfront/react-model$':
//       '<rootDir>/node_modules/@babel-dcfront/react-model/dist/js/src/index.js',
//   },