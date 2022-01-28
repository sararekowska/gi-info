import { useState } from "react";
import { useListCharacters } from "../../common/hooks/useListCharacters";
import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./CharList.module.scss";
import { Character } from "../../common/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <FontAwesomeIcon icon={["fas", "times-circle"]} />
  );
};

const CharList = () => {
  const { data } = useListCharacters();
  const [element, setElement] = useState<string>();

  return (
    <>
      <Link to="/">
        <FontAwesomeIcon
          icon={["fas", "arrow-circle-left"]}
          color="white"
          size="5x"
          className={commonstyles["back-icon"]}
        />
      </Link>
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
