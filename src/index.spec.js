import { expect } from 'chai';
import { doubler, mover } from './index.js';

describe('step-1', () => {

  describe('doubler', () => {

    it('should return 6, given 3', () => {
      expect(doubler(3)).to.equal(6);
    });

    it('should throw an exception on a string', () => {
      expect(()=>doubler("qqq")).to.throw(TypeError);
    });

  });

  describe('mover', () => {

    it('does not move on empty delta', () => {
      expect(mover({x: 1, y: 2}, {})).to.deep.equal({x: 1, y: 2});
    });

    it('move on x axis', () => {
      expect(mover({x: 1, y: 2}, {x: 10})).to.deep.equal({x: 11, y: 2});
    });

    it('move on y axis', () => {
      expect(mover({x: 1, y: 2}, {y: 100})).to.deep.equal({x: 1, y: 102});
    });

    it('move on both axis', () => {
      expect(mover({x: 1, y: 2}, {x: 10, y: 100})).to.deep.equal({x: 11, y: 102});
    });

    it('throws exceptions on type mismatches', () => {
      expect(()=>mover({x: 'a', y: 2}, {x: 10, y: 100})).to.throw(TypeError);
      expect(()=>mover({x: 1, y: 'a'}, {x: 10, y: 100})).to.throw(TypeError);
      expect(()=>mover({x: 1, y: 2}, {x: 'a', y: 100})).to.throw(TypeError);
      expect(()=>mover({x: 1, y: 2}, {x: 10, y: 'a'})).to.throw(TypeError);
    });

  });

});
