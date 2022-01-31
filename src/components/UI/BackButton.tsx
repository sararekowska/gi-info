import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";

export const BackButton = () => {
  const history = useHistory();
  return (
    <FontAwesomeIcon
      icon={["fas", "arrow-circle-left"]}
      color="white"
      size="5x"
      className={commonstyles["back-icon"]}
      onClick={() => {
        history.goBack();
      }}
    />
  );
};
