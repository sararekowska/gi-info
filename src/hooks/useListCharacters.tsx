import { useQuery } from "react-query";

export const useListCharacters = () => {
  const query = useQuery("characters", async () => {
    const res = await fetch("https://api.genshin.dev/characters/all");
    return res.json();
  });
  return query;
};
