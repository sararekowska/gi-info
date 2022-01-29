import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import { useCharacter } from "../../common/hooks/useCharacter";

const CharPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useCharacter(name);
  console.log(data);
  return (
    <>
      <Link to="/char-list">
        <FontAwesomeIcon
          icon={["fas", "arrow-circle-left"]}
          color="white"
          size="5x"
          className={commonstyles["back-icon"]}
        />
      </Link>
    </>
  );
};

export default CharPage;
