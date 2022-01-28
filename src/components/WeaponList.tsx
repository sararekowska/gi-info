import { useState } from "react";
import { useListWeapons, Weapon } from "../hooks/useListWeapons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

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
      className="weapon-img"
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
        <div className="select-btn">
          {["Catalyst", "Bow", "Sword", "Polearm", "Claymore"].map((type) => (
            <button onClick={() => setType(type)}>{type}</button>
          ))}

          <button onClick={() => setType("")}>ALL</button>
        </div>

        <div className="content-list">
          {data
            ?.filter((weapon) => !type || weapon.type === type)
            .map((weapon) => (
              <div className="list-item-weapon">
                <p>{weapon.name}</p>
                <br />
                <WeaponImage weapon={weapon} />
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default WeaponList;
