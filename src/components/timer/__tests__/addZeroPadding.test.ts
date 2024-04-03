import { addZeroPadding } from '../helpers/addZeroPadding';

describe('addZeroPadding()', () => {
  it('should pad N zeroes based on input', () => {
    expect(addZeroPadding('1', 2)).toBe('001');
  });
});
