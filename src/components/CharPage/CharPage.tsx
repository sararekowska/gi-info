import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import { useCharacter } from "../../common/hooks/useCharacter";
import { CharImage } from "../CharList/CharList";
import styles from "./CharPage.module.scss";

const CharPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useCharacter(name);
  return data ? (
    <>
      <Link to="/char-list">
        <FontAwesomeIcon
          icon={["fas", "arrow-circle-left"]}
          color="white"
          size="5x"
          className={commonstyles["back-icon"]}
        />
      </Link>
      <div className={styles["main-char"]}>
        <div className={styles["left-desc"]}>
          <p>{data.name}</p>
          <CharImage char={data} img="/portrait" />
        </div>

        <div className={styles["right-desc"]}>
          <p>Vision: {data.vision}</p>
          <p>Rarity: {data.rarity}</p>
          <p>Nation: {data.nation}</p>
          <p>Weapon: {data.weapon}</p>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  ) : null;
};

export default CharPage;
