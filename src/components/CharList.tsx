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
  console.log(data);

  const [element, setElement] = useState<string>();

  return (
    <>
      <main>
        <div className="buttons">
          {["Pyro", "Electro", "Anemo", "Cryo", "Hydro", "Geo"].map((el) => (
            <button onClick={() => setElement(el)}>{el}</button>
          ))}

          <button onClick={() => setElement("")}>CLEAR</button>
        </div>

        <div className="content-list">
          {data
            ?.filter((char) => !element || char.vision === element)
            .map((char) => (
              <div className="list-item">
                <p>{char.name}</p>
                <br />
                <CharImage char={char} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default CharList;
