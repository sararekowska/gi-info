export type Weapon = {
  name: string;
  type: string;
  baseAttack: number;
  rarity: number;
  passiveDesc: string;
  location: string;
};

export type Character = {
  name: string;
  nation: string;
  vision: string;
  description: string;
  weapon: string;
  rarity: number;
};
