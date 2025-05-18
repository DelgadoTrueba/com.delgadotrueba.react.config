module.exports = {
    displayName: 'jest-mjs',
    preset: '@delgadotrueba/react-config/jest/preset/dom',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[tj]s$': [
        'ts-jest',
        { tsconfig: '<rootDir>/tsconfig.mjs.spec.json' },
      ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: './coverage/mjs',
  };