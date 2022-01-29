import { useQuery } from "react-query";
import { Weapon } from "../Types";

export const useWeapon = (name: string) => {
  const query = useQuery<Weapon[]>("weapon", async () => {
    const res = await fetch(
      "https://api.genshin.dev/weapons/" +
        name
          .toLowerCase()
          .replace(" ", "-")
          .replace("'", "-")
          .replaceAll(" ", "-")
          .replace("--", "-")
    );
    return res.json();
  });
  return query;
};
