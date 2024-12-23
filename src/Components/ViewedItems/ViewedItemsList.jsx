/* eslint-disable react/prop-types */
import { ViewedItem } from "./index";

export default function ViewedItemsList({
  Viewed,
  onDeleteViewed,
  onSelectItem,
  onCategoryChange,
  onUpdateNote,
}) {
  return (
    <ul className="list">
      {Viewed.map((item) => (
        <ViewedItem
          key={item.id}
          item={item}
          onDeleteViewed={onDeleteViewed}
          onSelectItem={onSelectItem}
          onCategoryChange={onCategoryChange}
          onUpdateNote={onUpdateNote}
        />
      ))}
    </ul>
  );
}
