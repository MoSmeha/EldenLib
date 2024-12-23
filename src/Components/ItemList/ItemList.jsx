/* eslint-disable react/prop-types */
import { Item } from "./index";

// ItemList Components
export default function ItemList({ items, onSelectItem, query }) {
  if (items.length === 0) {
    return <p>No items found</p>;
  }

  const filteredItems =
    query.length === 0
      ? items // Show all items if search is empty
      : items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <ul className="list list-items">
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} onSelectItem={onSelectItem} />
      ))}
    </ul>
  );
}
