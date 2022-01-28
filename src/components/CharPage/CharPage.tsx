import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";

const CharPage = () => {
  const { name } = useParams<{ name?: string }>();

  return (
    <>
      <Link to="/">
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
