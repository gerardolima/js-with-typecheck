const {expect} = require('chai');
const {increment} = require('./index');

describe('step-1', () => {

  describe('increment', () => {

    it('should increment a number', () => {
      expect(increment(0)).to.equal(1);
    });

    it('should throw an exception on a string', () => {
      try {
        expect(increment("0")).to.equal(1);
        expect.fail();
      }
      catch(err) {
        expect(err).is.instanceOf(TypeError);
      }
    });

  });
});