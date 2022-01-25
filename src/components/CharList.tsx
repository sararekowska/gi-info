import { useListCharacters } from "../hooks/useListCharacters";

function CharList() {
  const { data } = useListCharacters();
  console.log(data);

  return (
    <>
      <main>
        {data?.map((char: { name: string; nation: string; vision: string }) => (
          <div className="list">
            Name: {char.name}
            <br />
            Nation: {char.nation}
            <br />
            Vision: {char.vision}
            <br />
            <img
              src={
                "https://api.genshin.dev/characters/" +
                char.name
                  .toLowerCase()
                  .replace(" ", "-")
                  .replace("sangonomiya-", "")
                  .replace("kamisato-", "")
                  .replace("kaedehara-", "")
                  .replace("-shogun", "")
                  .replace("kujou-", "") +
                "/icon-big"
              }
              alt="no icon availabe for this character"
              className="char-img"
            ></img>
          </div>
        ))}
      </main>
    </>
  );
}

export default CharList;
