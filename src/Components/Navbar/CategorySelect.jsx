export default function CategorySelect({ category, setCategory }) {
  return (
    <select
      className="category-select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="ammo">Ammo</option>
      <option value="armor">Armor</option>
      <option value="ashesOfWar">Ashes of War</option>
      <option value="boss">Bosses</option>
      <option value="class">Classes</option>
      <option value="creature">Creatures</option>
      <option value="incantation">Incantations</option>
      <option value="item">Items</option>
      <option value="location">Locations</option>
      <option value="npc">NPCs</option>
      <option value="shield">Shields</option>
      <option value="sorcery">Sorceries</option>
      <option value="spirit">Spirits</option>
      <option value="talisman">Talismans</option>
      <option value="weapon">Weapons</option>
    </select>
  );
}
