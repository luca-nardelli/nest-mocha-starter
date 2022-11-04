process.env.NODE_ENV = 'test';

// https://github.com/mochajs/mocha/blob/master/example/config/.mocharc.js
module.exports = {
  bail: true,
  color: true,
  parallel: false,
  exit: true,
  extension: ['ts'],
  timeout: 10000,
  // require: '@swc/register',
  // require: 'ts-node/register',
  spec: [
    './**/*.spec.ts',
  ]
};
