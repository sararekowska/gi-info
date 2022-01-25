import { useQuery } from "react-query";

type Weapon = {
  name: string;
  type: string;
  baseAttack: number;
};

export const useListWeapons = () => {
  const query = useQuery<Weapon[]>("weapon", async () => {
    const res = await fetch("https://api.genshin.dev/weapons/all");
    return res.json();
  });
  return query;
};
