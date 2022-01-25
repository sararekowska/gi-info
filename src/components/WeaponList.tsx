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
        {["Catalyst", "Bow", "Sword", "Polearm", "Claymore"].map((type) => (
          <button className="vision-type" onClick={() => setType(type)}>
            {type.toLowerCase()}
          </button>
        ))}

        <button className="vision-type" onClick={() => setType("")}>
          ALL
        </button>

        {data
          ?.filter((weapon) => !type || weapon.type === type)
          .map((weapon) => (
            <div className="list">
              Name: {weapon.name}
              <br />
              Type: {weapon.type}
              <br />
              Base Attack: {weapon.baseAttack}
              <br />
              <WeaponImage weapon={weapon} />
            </div>
          ))}
      </main>
    </>
  );
};

export default WeaponList;
