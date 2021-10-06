/* eslint-disable no-plusplus */
import { test } from '@jest/globals';
import getRandomInt from '../src/random';

/**
 * Test Suite
 */

test('test 0 & 1', () => {
  expect(getRandomInt(0, 0)).toBe(0);
  expect(getRandomInt(0, 1)).toBe(0);
  expect(getRandomInt(1, 1)).toBe(1);
});

describe('getRandomInt()', () => {
  it('returns equally random numbers', () => {
    // arrange
    const counts = [0, 0, 0, 0];

    // act

    for (let i = 0; i < 1000000; i++) {
      const rnd = getRandomInt(0, 4);
      counts[rnd] += 1;
    }

    for (let i = 0; i < counts.length; i++) {
      counts[i] = Math.round(counts[i] / 10000);
    }

    // assert
    expect(counts).toEqual([25, 25, 25, 25]);
  });
});
