import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import styles from "./Home.module.scss";
import img from "./paimon.png";

const HomePage = () => {
  return (
    <>
      <main className={styles["home-main"]}>
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
        <img alt="paimon" src={img} className={commonstyles["home-img"]} />
      </main>
    </>
  );
};

export default HomePage;
