import { useQuery } from "react-query";
import { Character } from "../Types";
import { sub } from "../utils";

export const useCharacter = (name: string) => {
  const query = useQuery<Character>(["character", name], async () => {
    const res = await fetch(
      "https://api.genshin.dev/characters/" +
        sub(
          name.replaceAll(" ", "-"),
          ["sangonomiya-", "kamisato-", "kaedehara-", "-shogun", "kujou-"],
          ""
        )
    );
    return res.json();
  });
  return query;
};
