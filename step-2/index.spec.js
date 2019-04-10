//@ts-nocheck

const {expect} = require('chai');
const {doubler} = require('./index');

describe('step-2', () => {

  describe('doubler', () => {

    it('should return 6, given 3', () => {
      expect(doubler(3)).to.equal(6);
    });

    it('should throw an exception on a string', () => {
      try {
        expect(doubler("qqq")).to.NaN;
        expect.fail();
      }
      catch(err) {
        expect(err).is.instanceOf(TypeError);
      }
    });

  });
});
