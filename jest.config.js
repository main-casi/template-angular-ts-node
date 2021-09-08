/* eslint-disable @typescript-eslint/no-unsafe-member-access */
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  testMatch: ['<rootDir>/src/app/**/*.spec.ts'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/src/test.ts'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$'
    }
  }
};
