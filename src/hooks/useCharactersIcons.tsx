import { useQuery } from "react-query";

export const useCharactersIcons = (name: string) => {
  const query = useQuery("characters", async () => {
    const res = await fetch(
      "https://api.genshin.dev/characters/" + name + "/icon-big"
    );
    return res.json();
  });
  return query;
};
