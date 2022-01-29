import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import { useCharacter } from "../../common/hooks/useCharacter";
import { CharImage } from "../CharList/CharList";

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
      <main>
        <h1>{data.name}</h1>
        <h2>{data.vision}</h2>
        <h2>Rarity: {data.rarity}</h2>
        <CharImage char={data} img="/portrait" />
        <p>Nation: {data.nation}</p>
        <p>Weapon: {data.weapon}</p>
        <p>{data.description}</p>
      </main>
    </>
  ) : null;
};

export default CharPage;
