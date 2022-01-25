import { useState } from "react";
import { Character, useListCharacters } from "../hooks/useListCharacters";
import { icon } from "./WeaponList";

const CharImage = ({ char }: { char: Character }) => {
  const [error, setError] = useState<Boolean>();

  return !error ? (
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
      onError={() => setError(true)}
      className="char-img"
    ></img>
  ) : (
    icon
  );
};

const CharList = () => {
  const { data } = useListCharacters();
  // console.log(data);

  const [element, setElement] = useState<string>();

  return (
    <>
      <main>
        {["PYRO", "ELECTRO", "ANEMO", "CRYO", "HYDRO", "GEO"].map((el) => (
          <button className="vision-type" onClick={() => setElement(el)}>
            {el.toLowerCase()}
          </button>
        ))}

        <button className="vision-type" onClick={() => setElement("")}>
          ALL
        </button>

        {data
          ?.filter((char) => !element || char.vision_key === element)
          .map((char) => (
            <div className="list">
              Name: {char.name}
              <br />
              Nation: {char.nation}
              <br />
              Vision: {char.vision}
              <br />
              <CharImage char={char} />
            </div>
          ))}
      </main>
    </>
  );
};

export default CharList;
