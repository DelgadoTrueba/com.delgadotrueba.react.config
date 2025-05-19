/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
    clearMocks: true,
    testTimeout: 60000,
    resetMocks: false,
    restoreMocks: false,
  
    transform: {
      '^.+\\.(ttf|woff|woff2|png|jpg|svg|pdf)$': '@delgadotrueba/react-config/jest/preset/src/transformers/fileTransformer.js',
      '^.+\\.(mp3)$': '@delgadotrueba/react-config/jest/preset/src/transformers/fileTransformer.js',
      '^.+\\.(css|scss|sass)$': '@delgadotrueba/react-config/jest/preset/src/transformers/styleTransformer.js',
      '^.+\\.(md|mdx)$': '@delgadotrueba/react-config/jest/preset/src/transformers/markdownTransformer.js',
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
  //     'node_modules/(?!(?:@delgadotueba/react-i18next|@delgadotueba/react-http|@delgadotueba/react-datetime|@delgadotueba/featureflags|@delgadotueba/react-model)/)',
  //   ],
  //   moduleNameMapper: {
  //     ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  //     '\\.(css|scss|sass)$': '<rootDir>/src/utils-test/mockFiles.ts',
  //     '^@delgadotueba/react-i18next$':
  //       '<rootDir>/node_modules/@delgadotueba/react-i18next/dist/js/src/index.js',
  //     '^@delgadotueba/react-http$':
  //       '<rootDir>/node_modules/@delgadotueba/react-http/dist/js/src/index.js',
  //     '^@delgadotueba/react-datetime$':
  //       '<rootDir>/node_modules/@delgadotueba/react-datetime/dist/js/src/index.js',
  //     '^@delgadotueba/catalogo-ui$':
  //       '<rootDir>/node_modules/@delgadotueba/catalogo-ui/dist/js/index.js',
  //     '^@delgadotueba/featureflags$':
  //       '<rootDir>/node_modules/@delgadotueba/featureflags/dist/js/index.js',
  //     '^@delgadotueba/react-model$':
  //       '<rootDir>/node_modules/@delgadotueba/react-model/dist/js/src/index.js',
  //   },