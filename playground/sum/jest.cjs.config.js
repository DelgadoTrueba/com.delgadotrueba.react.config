module.exports = {
    displayName: 'jest-cjs',
    preset: '@delgadotrueba/react-config/jest/preset/no-dom',
    testEnvironment: 'node',
    transform: {
      '^.+\\.[tj]s$': [
        'ts-jest',
        { tsconfig: '<rootDir>/tsconfig.cjs.spec.json' },
      ],
    },
    moduleFileExtensions: ['ts', 'js', 'html'],
    coverageDirectory: './coverage/cjs',
  };