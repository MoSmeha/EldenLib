export { default as getCategoryFromItem } from "./getCategoryFromItem";
export const REST_CATEGORIES = {
  class: "classes",
  ashesOfWar: "ashes",
};

export const API_BASE_URL = "https://eldenring.fanapis.com/api";
export const CATEGORY_FIELDS = {
  ammo: `
          type
          attackPower {
            name
            amount
          }
          passive
        `,
  item: `
          effect
          type
        `,
  armor: `
          category
          dmgNegation {
            name
            amount
          }
        `,
  ashesOfWar: `
          affinity
          skill
        `,
  boss: `
          location
          drops
          healthPoints
        `,
  class: `
          stats {
            level
            vigor
            mind
            endurance
            strength
            dexterity
            intelligence
            faith
            arcane
          }
        `,
  creature: `
          location
          drops
        `,
  incantation: `
          type
          cost
          slots
          effects
          requires {
            name
            amount
          }
        `,
  location: ``,
  npc: `
          quote
          location
          role
        `,
  shield: `
          attack {
            name
            amount
          }
          defence {
            name
            amount
          }
          scalesWith {
            name
            scaling
          }
          requiredAttributes {
            name
            amount
          }
          category
          weight
        `,
  sorcery: `
          type
          cost
          slots
          effects
          requires {
            name
            amount
          }
        `,
  spirit: `
          fpCost
          hpCost
          effect
        `,
  talisman: `
          effect
        `,
  weapon: `
          attack {
            name
            amount
          }
          defence {
            name
            amount
          }
          scalesWith {
            name
            scaling
          }
          requiredAttributes {
            name
            amount
          }
          category
          weight
        `,
};
