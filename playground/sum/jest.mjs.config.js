module.exports = {
    displayName: 'jest-mjs',
    preset: '@delgadotrueba/react-config/jest/preset/dom',
    setupFilesAfterEnv: ["<rootDir>/src/utils-test/setupTest.ts"],
    transform: {
      '^.+\\.[tj]s$': [
        'ts-jest',
        { tsconfig: '<rootDir>/tsconfig.mjs.spec.json' },
      ],
    },
    coverageDirectory: './coverage/mjs',
  };