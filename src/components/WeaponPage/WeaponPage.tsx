import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { useWeapon } from "../../common/hooks/useWeapon";
import commonstyles from "../../common/Styles.module.scss";
import { WeaponImage } from "../WeaponList/WeaponList";

const WeaponPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useWeapon(name);
  console.log(data);
  return data ? (
    <>
      <Link to="/weapon-list">
        <FontAwesomeIcon
          icon={["fas", "arrow-circle-left"]}
          color="white"
          size="5x"
          className={commonstyles["back-icon"]}
        />
      </Link>
      <main>
        <h1>{data.name}</h1>
        <h2>{data.type}</h2>
        <h2>Rarity: {data.rarity}</h2>
        <WeaponImage weapon={data} />
        <p>Base attack: {data.baseAttack}</p>
        <p>Passive: {data.passiveDesc}</p>
        <p>Location: {data.location}</p>
      </main>
    </>
  ) : null;
};

export default WeaponPage;
