module.exports = {
  // An array of glob patterns indicating a set of files for which coverage
  // information should be collected
  collectCoverageFrom: ['**/*.{js,ts}'],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['/lib/', '\\.d\\.ts$'],

  // An array of directory names to be searched recursively up from the
  // requiring module's location
  moduleDirectories: ['node_modules', '.'],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/*.spec.ts', '!**/node_modules/**', '!**/lib/**'],

  // Supresses console.log produced by code under test
  silent: true,
};
