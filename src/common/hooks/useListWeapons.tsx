import { useQuery } from "react-query";
import { Weapon } from "../Types";

export const useListWeapons = () => {
  const query = useQuery<Weapon[]>("weapon", async () => {
    const res = await fetch("https://api.genshin.dev/weapons/all");
    return res.json();
  });
  return query;
};
