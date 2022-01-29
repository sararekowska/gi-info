import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { useWeapon } from "../../common/hooks/useWeapon";
import commonstyles from "../../common/Styles.module.scss";

const WeaponPage = () => {
  const { name } = useParams<{ name: string }>();
  const { data } = useWeapon(name);
  console.log(data);
  return (
    <>
      <Link to="/weapon-list">
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

export default WeaponPage;
