import { useState } from "react";
import { useListCharacters } from "../../common/hooks/useListCharacters";
import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./CharList.module.scss";
import { Character } from "../../common/Types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sub } from "../../common/utils";
import { BackButton } from "../UI/BackButton";

export const CharImage = (props: { char: Character; img: string }) => {
  const [error, setError] = useState<Boolean>();

  return !error ? (
    <img
      src={
        "https://api.genshin.dev/characters/" +
        sub(
          props.char.name.replaceAll(" ", "-"),
          ["sangonomiya-", "kamisato-", "kaedehara-", "-shogun", "kujou-"],
          ""
        ) +
        props.img
      }
      onError={() => setError(true)}
      className={styles["char-img"]}
      alt="character"
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
      <BackButton />
      <main>
        <section className={commonstyles["select-btn"]}>
          {["Pyro", "Electro", "Anemo", "Cryo", "Hydro", "Geo"].map((el) => (
            <button key={el} onClick={() => setElement(el)}>
              {el}
            </button>
          ))}

          <button onClick={() => setElement("")}>CLEAR</button>
        </section>

        <section className={commonstyles["content-list"]}>
          {data
            ?.filter((char) => !element || char.vision === element)
            .map((char) => (
              <Link key={char.name} to={"/gi-info/character/" + char.name}>
                <section className={styles["list-item"]}>
                  <p>{char.name}</p>
                  <br />
                  <CharImage char={char} img={"/icon-big"} />
                </section>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
};

export default CharList;
