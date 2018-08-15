const assert = require('chai').assert;
const sum = require('../lib/index');

describe('index', () => {
  it('Debería exportar una función Sum', () => {
    assert.isFunction(sum);
  });
  it('Debería retornar 5 para sum(2, 3)', () => {
    assert.equal(sum(2, 3), 5);
  })
});