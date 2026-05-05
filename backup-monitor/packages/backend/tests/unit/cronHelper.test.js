const { expect } = require('chai');
const { getDescription } = require('../../src/shared/cronHelper');

describe('cronHelper', () => {
  it('getDescription должен возвращать ту же строку', () => {
    const cron = '0 2 * * 6';
    expect(getDescription(cron)).to.equal(cron);
  });
});