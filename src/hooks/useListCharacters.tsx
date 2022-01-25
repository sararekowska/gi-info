import { useQuery } from "react-query";

export type Character = {
  name: string;
  nation: string;
  vision: string;
  vision_key: string;
};

export const useListCharacters = () => {
  const query = useQuery<Character[]>("characters", async () => {
    const res = await fetch("https://api.genshin.dev/characters/all");
    return res.json();
  });
  return query;
};
