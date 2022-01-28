import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./Home.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={commonstyles["main-home-error"]}>
        <p className={commonstyles["home-error-p"]}>
          Get info about Genshin Impact characters and weapons.
        </p>

        <Link to="/char-list">
          <button type="button" className={commonstyles["char-btn"]}>
            View Characters
          </button>
        </Link>

        <Link to="/weapon-list">
          <button type="button" className={styles["weapon-btn"]}>
            View weapons
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
