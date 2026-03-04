const extractSearchableText = (value) => {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map((entry) => extractSearchableText(entry)).join(" ");
  }

  if (typeof value === "object") {
    if ("props" in value && value.props?.children !== undefined) {
      return extractSearchableText(value.props.children);
    }

    return Object.values(value)
      .map((entry) => extractSearchableText(entry))
      .join(" ");
  }

  return "";
};

export const filterByKeywords = (items, query, fields) => {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) =>
    fields.some((field) =>
      extractSearchableText(item[field]).toLowerCase().includes(normalizedQuery)
    )
  );
};