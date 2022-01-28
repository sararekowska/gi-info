import { useQuery } from "react-query";
import { Character } from "../Types";

export const useListCharacters = () => {
  const query = useQuery<Character[]>("characters", async () => {
    const res = await fetch("https://api.genshin.dev/characters/all");
    return res.json();
  });
  return query;
};
