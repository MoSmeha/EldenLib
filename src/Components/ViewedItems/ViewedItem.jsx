/* eslint-disable react/prop-types */
import { getCategoryFromItem } from "../../utilities/index";

export default function ViewedItem({
  item,
  onDeleteViewed,
  onSelectItem,
  onCategoryChange,
}) {
  const handleItemClick = () => {
    const category = getCategoryFromItem(item);
    onCategoryChange(category);
    onSelectItem(item.id);
  };

  // Crop the description to a maximum of 14 words
  const croppedDescription =
    item.description.split(" ").slice(0, 17).join(" ") +
    (item.description.split(" ").length > 17 ? "..." : "");

  return (
    <li>
      <img
        src={item.image}
        alt={`${item.name} poster`}
        onClick={handleItemClick}
        style={{ cursor: "pointer" }}
      />
      <div className="viewed-item-content">
        <h3>{item.name}</h3>
        <div>
          <p>{croppedDescription}</p>
        </div>
      </div>
      <button className="btn-delete" onClick={() => onDeleteViewed(item.id)}>
        X
      </button>
    </li>
  );
}
