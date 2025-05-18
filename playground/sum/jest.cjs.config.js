module.exports = {
    displayName: 'jest-cjs',
    preset: '@delgadotrueba/react-config/jest/preset/no-dom',
    setupFilesAfterEnv: ["<rootDir>/src/utils-test/setupTest.ts"],
    transform: {
      '^.+\\.[tj]s$': [
        'ts-jest',
        { tsconfig: '<rootDir>/tsconfig.cjs.spec.json' },
      ],
    },
    coverageDirectory: './coverage/cjs',
  };