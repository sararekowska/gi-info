import { useParams } from "react-router-dom";
import { useCharacter } from "../../common/hooks/useCharacter";
import { CharImage } from "../CharList/CharList";
import styles from "./CharPage.module.scss";
import { BackButton } from "../UI/BackButton";

const CharPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useCharacter(name);
  return data ? (
    <>
      <BackButton />
      <main className={styles["main-char"]}>
        <section className={styles["left-desc"]}>
          <p>{data.name}</p>
          <CharImage char={data} img="/portrait" />
        </section>

        <section className={styles["right-desc"]}>
          <p>Vision: {data.vision}</p>
          <p>Rarity: {data.rarity}</p>
          <p>Nation: {data.nation}</p>
          <p>Weapon: {data.weapon}</p>
          <p>{data.description}</p>
        </section>
      </main>
    </>
  ) : null;
};

export default CharPage;
