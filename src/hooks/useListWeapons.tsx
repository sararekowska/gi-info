import { useQuery } from "react-query";

export const useListWeapons = () => {
  const query = useQuery("weapon", async () => {
    const res = await fetch("https://api.genshin.dev/weapons/all");
    return res.json();
  });
  return query;
};
