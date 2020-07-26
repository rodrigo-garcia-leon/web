import { expect, fixture } from '@open-wc/testing';
import { sum } from '../src/sum.js';

it('doSomething does not effect state', () => {
  const el = await fixture('...');

  expect(el.state).to.be.true;
  el.doSomething();
  expect(el.state).to.be.true;
});
