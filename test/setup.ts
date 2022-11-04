import * as chai from 'chai';
import * as chaiSubset from 'chai-subset';
import { jestSnapshotPlugin } from 'mocha-chai-jest-snapshot';

chai.use(chaiSubset);
chai.use(jestSnapshotPlugin());

process.env.NODE_ENV = 'test';
process.env.APP_ENV = 'test';

before(async () => {
  // Add global setup here
});
