import { MAX_SEARCH_INPUT_LENGTH, sanitizeSearchInput } from '../../utils/sanitizeSearchInput';

describe('sanitizeSearchInput', () => {
  it('happy path: keeps plain text searchable input intact', () => {
    expect(sanitizeSearchInput('react feedback')).toBe('react feedback');
  });

  it('happy path: strips html-like tags and preserves inner text', () => {
    expect(sanitizeSearchInput('<script>react</script>')).toBe('react');
  });

  it('sad path: removes control characters and collapses whitespace', () => {
    expect(sanitizeSearchInput('react\n\t\u0000   feedback')).toBe('react feedback');
  });

  it('sad path: safely handles nullish input', () => {
    expect(sanitizeSearchInput(null)).toBe('');
    expect(sanitizeSearchInput(undefined)).toBe('');
  });

  it('sad path: enforces max input length', () => {
    const longInput = 'a'.repeat(MAX_SEARCH_INPUT_LENGTH + 50);

    expect(sanitizeSearchInput(longInput)).toHaveLength(MAX_SEARCH_INPUT_LENGTH);
  });
});