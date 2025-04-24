import { cn } from '../utils';

describe('cn (className merger utility)', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles undefined and null values', () => {
    expect(cn('class1', undefined, 'class2', null)).toBe('class1 class2');
  });

  it('handles empty strings', () => {
    expect(cn('class1', '', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    const condition = true;
    expect(cn('base', condition && 'active')).toBe('base active');
    expect(cn('base', !condition && 'inactive')).toBe('base');
  });

  it('handles array of classes', () => {
    expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
  });

  it('handles objects with boolean values', () => {
    expect(cn({
      'class1': true,
      'class2': false,
      'class3': true
    })).toBe('class1 class3');
  });

  it('merges tailwind classes correctly', () => {
    expect(cn(
      'p-4',
      'bg-blue-500',
      condition => condition ? 'text-white' : 'text-black'
    )).toBe('p-4 bg-blue-500 text-white');
  });

  it('handles multiple types of arguments together', () => {
    const condition = true;
    expect(cn(
      'base',
      { 'conditional': condition },
      condition && 'active',
      ['array-class1', 'array-class2']
    )).toBe('base conditional active array-class1 array-class2');
  });
});