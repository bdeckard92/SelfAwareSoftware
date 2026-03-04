import { SORT_ORDER } from "../../utils/sortByDate";
import "./SortToggle.css";

const SortToggle = ({ value, onChange }) => {
  const isNewestFirst = value === SORT_ORDER.NEWEST;

  return (
    <button
      className="sort-toggle"
      type="button"
      onClick={() => onChange(isNewestFirst ? SORT_ORDER.OLDEST : SORT_ORDER.NEWEST)}
    >
      Sort: {isNewestFirst ? "Newest to Oldest" : "Oldest to Newest"}
    </button>
  );
};

export default SortToggle;