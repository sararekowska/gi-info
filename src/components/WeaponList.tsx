import { useState } from "react";
import { useListWeapons } from "../hooks/useListWeapons";

function WeaponList() {
  const { data } = useListWeapons();
  console.log(data);

  const [type, setType] = useState<string>();

  return (
    <>
      <main>
        {["Catalyst", "Bow", "Sword", "Polearm", "Claymore"].map((type) => (
          <button className="vision-type" onClick={() => setType(type)}>
            {type.toLowerCase()}
          </button>
        ))}

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
                alt="no icon availabe for this weapon"
                className="weapon-img"
              ></img>
            </div>
          ))}
      </main>
    </>
  );
}

export default WeaponList;
