/* eslint-disable react/prop-types */
import { ItemProperties } from "../common/index";

export default function Item({ item, onSelectItem, category }) {
  return (
    <li onClick={() => onSelectItem(item.id)}>
      <img src={item.image} alt={`${item.name}`} />
      <div className="item-info">
        <h3>{item.name}</h3>

        <ItemProperties item={item} category={category} />
      </div>
    </li>
  );
}
