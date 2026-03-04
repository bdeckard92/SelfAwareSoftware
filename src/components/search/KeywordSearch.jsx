const KeywordSearch = ({ value, onChange, ariaLabel, placeholder }) => {
  return (
    <input
      type="search"
      aria-label={ariaLabel}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default KeywordSearch;