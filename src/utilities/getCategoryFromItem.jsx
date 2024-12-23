export default function getCategoryFromItem(item) {
  // Check for specific properties to determine the category
  if (item.attackPower) return "ammo";
  if (item.dmgNegation) return "armor";
  if (item.affinity) return "ashesOfWar";
  if (item.healthPoints) return "boss";
  if (item.stats) return "class";
  if (item.drops && !item.healthPoints) return "creature";
  if (item.slots && item.effects) {
    return item.type?.toLowerCase()?.includes("incantation")
      ? "incantation"
      : "sorcery";
  }
  if (item.role) return "npc";
  if (item.weight && item.category?.toLowerCase()?.includes("shield"))
    return "shield";
  if (item.fpCost && item.hpCost) return "spirit";
  if (item.effect && !item.type) return "talisman";
  if (item.weight && item.attack) return "weapon";
  return "item"; // Default category
}
