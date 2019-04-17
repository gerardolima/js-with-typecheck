const {expect} = require('chai');
const {doubler} = require('./index');

describe('step-1', () => {

  describe('doubler', () => {

    it('should return 6, given 3', () => {
      expect(doubler(3)).to.equal(6);
    });

    it('should throw an exception on a string', () => {
      expect(()=>doubler("qqq")).to.throw(TypeError);
    });

  });
});
