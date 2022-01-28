import { useState } from "react";
import { Character, useListCharacters } from "../../hooks/useListCharacters";
import { icon } from "../WeaponList/WeaponList";
import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./CharList.module.scss";

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
      className={styles["char-img"]}
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
        <div className={commonstyles["select-btn"]}>
          {["Pyro", "Electro", "Anemo", "Cryo", "Hydro", "Geo"].map((el) => (
            <button onClick={() => setElement(el)}>{el}</button>
          ))}

          <button onClick={() => setElement("")}>CLEAR</button>
        </div>

        <div className={commonstyles["content-list"]}>
          {data
            ?.filter((char) => !element || char.vision === element)
            .map((char) => (
              <Link to={"/character/" + char.name}>
                <div className={styles["list-item"]}>
                  <p>{char.name}</p>
                  <br />
                  <CharImage char={char} />
                </div>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};

export default CharList;
