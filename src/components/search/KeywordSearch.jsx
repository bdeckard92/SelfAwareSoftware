import { sanitizeSearchInput } from "../../utils/sanitizeSearchInput";

const KeywordSearch = ({ value, onChange, ariaLabel, placeholder }) => {
  return (
    <input
      type="search"
      aria-label={ariaLabel}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(sanitizeSearchInput(event.target.value))}
    />
  );
};

export default KeywordSearch;