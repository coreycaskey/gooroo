import { capitalize } from '../capitalize';

describe('capitalize()', () => {
  it('should capitalize multi-length strings', () => {
    expect(capitalize('test')).toBe('Test');
  });

  it('should capitalize single length strings', () => {
    expect(capitalize('i')).toBe('I');
  });

  it('should not error on empty strings', () => {
    expect(capitalize('')).toBe('');
  });
});
