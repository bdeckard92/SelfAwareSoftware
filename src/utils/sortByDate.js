export const SORT_ORDER = {
  OLDEST: "asc",
  NEWEST: "desc",
};

const toTimestamp = (value) => {
  if (!value) {
    return null;
  }

  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? null : timestamp;
};

export const sortByDate = (items, dateField, order = SORT_ORDER.NEWEST) => {
  const normalizedOrder = order === SORT_ORDER.OLDEST ? SORT_ORDER.OLDEST : SORT_ORDER.NEWEST;

  return [...items].sort((firstItem, secondItem) => {
    const firstTimestamp = toTimestamp(firstItem?.[dateField]);
    const secondTimestamp = toTimestamp(secondItem?.[dateField]);

    if (firstTimestamp === null && secondTimestamp === null) {
      return 0;
    }

    if (firstTimestamp === null) {
      return 1;
    }

    if (secondTimestamp === null) {
      return -1;
    }

    if (normalizedOrder === SORT_ORDER.OLDEST) {
      return firstTimestamp - secondTimestamp;
    }

    return secondTimestamp - firstTimestamp;
  });
};