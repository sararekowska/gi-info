import { useQuery } from "react-query";
import { Weapon } from "../Types";
import { sub } from "../utils";

export const useWeapon = (name: string) => {
  const query = useQuery<Weapon[]>(["weapon", name], async () => {
    const res = await fetch(
      "https://api.genshin.dev/weapons/" + sub(name, ["'", " ", "--"], "-")
    );
    return res.json();
  });
  return query;
};
