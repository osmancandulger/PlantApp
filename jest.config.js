module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^:hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^:atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^:enums/(.*)$': '<rootDir>/src/enums/$1',
    '^:utils$': '<rootDir>/src/utils',
    '^:constants/(.*)$': '<rootDir>/src/constants/$1',
    '@react-native-async-storage/async-storage':
      '@react-native-async-storage/async-storage/jest/async-storage-mock.js',
  },
};
