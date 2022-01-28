import { useState } from "react";
import { useListWeapons, Weapon } from "../../hooks/useListWeapons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./WeaponList.module.scss";

export const icon = <FontAwesomeIcon icon={faTimesCircle} />;

const WeaponImage = ({ weapon }: { weapon: Weapon }) => {
  const [error, setError] = useState<Boolean>();

  return !error ? (
    <img
      src={
        "https://api.genshin.dev/weapons/" +
        weapon.name
          .toLowerCase()
          .replace(" ", "-")
          .replace("'", "-")
          .replaceAll(" ", "-")
          .replace("--", "-") +
        "/icon"
      }
      onError={() => setError(true)}
      className={styles["weapon-img"]}
    ></img>
  ) : (
    icon
  );
};

const WeaponList = () => {
  const { data } = useListWeapons();
  // console.log(data);

  const [type, setType] = useState<string>();

  return (
    <>
      <main>
        <div className={commonstyles["select-btn"]}>
          {["Catalyst", "Bow", "Sword", "Polearm", "Claymore"].map((type) => (
            <button onClick={() => setType(type)}>{type}</button>
          ))}

          <button onClick={() => setType("")}>ALL</button>
        </div>

        <div className={commonstyles["content-list"]}>
          {data
            ?.filter((weapon) => !type || weapon.type === type)
            .map((weapon) => (
              <Link to={"/weapon/" + weapon.name}>
                <div className={styles["list-item-weapon"]}>
                  <p>{weapon.name}</p>
                  <br />
                  <WeaponImage weapon={weapon} />
                </div>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};

export default WeaponList;