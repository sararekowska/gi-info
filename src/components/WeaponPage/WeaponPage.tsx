import { useParams } from "react-router-dom";
import { useWeapon } from "../../common/hooks/useWeapon";
import { BackButton } from "../UI/BackButton";
import { WeaponImage } from "../WeaponList/WeaponList";
import styles from "./WeaponPage.module.scss";

const WeaponPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useWeapon(name);
  console.log(data);
  return data ? (
    <>
      <BackButton />
      <main className={styles["main-weapon"]}>
        <section className={styles["left-desc"]}>
          <p>{data.name}</p>
          <WeaponImage weapon={data} />
        </section>
        <section className={styles["right-desc"]}>
          <p>Type: {data.type}</p>
          <p>Rarity: {data.rarity}</p>
          <p>Base attack: {data.baseAttack}</p>
          <p>Passive: {data.passiveDesc}</p>
          <p>Location: {data.location}</p>
        </section>
      </main>
    </>
  ) : null;
};

export default WeaponPage;
