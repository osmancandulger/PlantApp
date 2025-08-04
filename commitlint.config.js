module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'chore', 'style', 'fix', 'docs', 'refactor']],
    'type-case': [2, 'always', 'lowercase'],
    'subject-case': [2, 'always', 'lowercase'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
  },
};
