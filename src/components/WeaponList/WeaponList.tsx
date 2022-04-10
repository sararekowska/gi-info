import { useState } from "react";
import { useListWeapons } from "../../common/hooks/useListWeapons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./WeaponList.module.scss";
import { Weapon } from "../../common/Types";
import { sub } from "../../common/utils";
import { BackButton } from "../UI/BackButton";

export const WeaponImage = ({ weapon }: { weapon: Weapon }) => {
  const [error, setError] = useState<Boolean>();

  return !error ? (
    <img
      src={
        "https://api.genshin.dev/weapons/" +
        sub(weapon.name, ["'", " ", "--"], "-") +
        "/icon"
      }
      onError={() => setError(true)}
      className={styles["weapon-img"]}
      alt="weapon"
    ></img>
  ) : (
    <FontAwesomeIcon icon={["fas", "times-circle"]} />
  );
};

const WeaponList = () => {
  const { data } = useListWeapons();

  const [type, setType] = useState<string>();

  return (
    <>
      <BackButton />
      <main>
        <section className={commonstyles["select-btn"]}>
          {["Catalyst", "Bow", "Sword", "Polearm", "Claymore"].map((type) => (
            <button key={type} onClick={() => setType(type)}>
              {type}
            </button>
          ))}

          <button onClick={() => setType("")}>ALL</button>
        </section>

        <section className={commonstyles["content-list"]}>
          {data
            ?.filter((weapon) => !type || weapon.type === type)
            .map((weapon) => (
              <Link key={weapon.name} to={"/gi-info/weapon/" + weapon.name}>
                <section className={styles["list-item-weapon"]}>
                  <p>{weapon.name}</p>
                  <br />
                  <WeaponImage weapon={weapon} />
                </section>
              </Link>
            ))}
        </section>
      </main>
    </>
  );
};

export default WeaponList;
