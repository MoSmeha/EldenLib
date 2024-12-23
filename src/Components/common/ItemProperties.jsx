/* eslint-disable react/prop-types */
export default function ItemProperties({ item, category }) {
  switch (category) {
    case "ammo":
      return (
        <div className="item-properties">
          <p>
            <strong>Type:</strong> {item.type}
          </p>
          {item.attackPower && (
            <div>
              <strong>Attack Power:</strong>
              <ul>
                {item.attackPower.map((attack, index) => (
                  <li key={index}>
                    {attack.name}: {attack.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {item.passive && (
            <p>
              <strong>Passive:</strong> {item.passive}
            </p>
          )}
        </div>
      );

    case "item":
      return (
        <div className="item-properties">
          <p>
            <strong>Type:</strong> {item.type}
          </p>
          <p>
            <strong>Effect:</strong> {item.effect}
          </p>
        </div>
      );

    case "armor":
      return (
        <div className="item-properties">
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          {item.dmgNegation && (
            <div>
              <strong>Damage Negation:</strong>
              <ul>
                {item.dmgNegation.map((neg, index) => (
                  <li key={index}>
                    {neg.name}: {neg.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case "ashesOfWar":
      return (
        <div className="item-properties">
          <p>
            <strong>Affinity:</strong> {item.affinity}
          </p>
          <p>
            <strong>Skill:</strong> {item.skill}
          </p>
        </div>
      );

    case "boss":
      return (
        <div className="item-properties">
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>Health Points:</strong> {item.healthPoints}
          </p>
          {item.drops && (
            <div>
              <strong>Drops:</strong>
              <ul>
                {item.drops.map((drop, index) => (
                  <li key={index}>{drop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case "class":
      return (
        <div className="item-properties">
          {item.stats && (
            <div className="stats-grid">
              <strong>Stats:</strong>
              <p>
                <strong>Level:</strong> {item.stats.level}
              </p>
              <p>
                <strong>Vigor:</strong> {item.stats.vigor}
              </p>
              <p>
                <strong>Mind:</strong> {item.stats.mind}
              </p>
              <p>
                <strong>Endurance:</strong> {item.stats.endurance}
              </p>
              <p>
                <strong>Strength:</strong> {item.stats.strength}
              </p>
              <p>
                <strong>Dexterity:</strong> {item.stats.dexterity}
              </p>
              <p>
                <strong>Intelligence:</strong> {item.stats.intelligence}
              </p>
              <p>
                <strong>Faith:</strong> {item.stats.faith}
              </p>
              <p>
                <strong>Arcane:</strong> {item.stats.arcane}
              </p>
            </div>
          )}
        </div>
      );

    case "creature":
      return (
        <div className="item-properties">
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          {item.drops && (
            <div>
              <strong>Drops:</strong>
              <ul>
                {item.drops.map((drop, index) => (
                  <li key={index}>{drop}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case "incantation":
    case "sorcery":
      return (
        <div className="item-properties">
          <p>
            <strong>Type:</strong> {item.type}
          </p>
          <p>
            <strong>Cost:</strong> {item.cost}
          </p>
          <p>
            <strong>Slots:</strong> {item.slots}
          </p>
          {item.effects && (
            <div>
              <strong>Effects:</strong>
              <ul>
                {item.effects.map((effect, index) => (
                  <li key={index}>{effect}</li>
                ))}
              </ul>
            </div>
          )}
          {item.requires && (
            <div>
              <strong>Requirements:</strong>
              <ul>
                {item.requires.map((req, index) => (
                  <li key={index}>
                    {req.name}: {req.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case "npc":
      return (
        <div className="item-properties">
          <p>
            <strong>Location:</strong> {item.location}
          </p>
          <p>
            <strong>Role:</strong> {item.role}
          </p>
          {item.quote && (
            <p>
              <strong>Quote:</strong> "{item.quote}"
            </p>
          )}
        </div>
      );

    case "shield":
    case "weapon":
      return (
        <div className="item-properties">
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Weight:</strong> {item.weight}
          </p>

          {item.attack && (
            <div>
              <strong>Attack:</strong>
              <ul>
                {item.attack.map((att, index) => (
                  <li key={index}>
                    {att.name}: {att.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.defence && (
            <div>
              <strong>Defence:</strong>
              <ul>
                {item.defence.map((def, index) => (
                  <li key={index}>
                    {def.name}: {def.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.scalesWith && (
            <div>
              <strong>Scales With:</strong>
              <ul>
                {item.scalesWith.map((scale, index) => (
                  <li key={index}>
                    {scale.name}: {scale.scaling}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {item.requiredAttributes && (
            <div>
              <strong>Required Attributes:</strong>
              <ul>
                {item.requiredAttributes.map((req, index) => (
                  <li key={index}>
                    {req.name}: {req.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case "spirit":
      return (
        <div className="item-properties">
          <p>
            <strong>FP Cost:</strong> {item.fpCost}
          </p>
          <p>
            <strong>HP Cost:</strong> {item.hpCost}
          </p>
          <p>
            <strong>Effect:</strong> {item.effect}
          </p>
        </div>
      );

    case "talisman":
      return (
        <div className="item-properties">
          <p>
            <strong>Effect:</strong> {item.effect}
          </p>
        </div>
      );

    default:
      return null;
  }
}
