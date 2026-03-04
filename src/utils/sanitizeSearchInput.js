export const MAX_SEARCH_INPUT_LENGTH = 100;

export const sanitizeSearchInput = (value, maxLength = MAX_SEARCH_INPUT_LENGTH) => {
  const normalized = String(value ?? "").normalize("NFKC");

  const sanitized = normalized
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/[<>{}`$\\;]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return sanitized.slice(0, Math.max(0, maxLength)).trim();
};