import { useQuery } from "react-query";
import { Character } from "../Types";

export const useCharacter = (name: string) => {
  const query = useQuery<Character[]>("character", async () => {
    const res = await fetch(
      "https://api.genshin.dev/characters/" +
        name
          .toLowerCase()
          .replace(" ", "-")
          .replace("sangonomiya-", "")
          .replace("kamisato-", "")
          .replace("kaedehara-", "")
          .replace("-shogun", "")
          .replace("kujou-", "")
    );
    return res.json();
  });
  return query;
};
