import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";
import img from "./sucrose.png";
import styles from "./Error.module.scss";

const ErrorPage = () => {
  return (
    <>
      <main className={styles["error-main"]}>
        <section className={commonstyles["main-home-error"]}>
          <p className={commonstyles["home-error-p"]}>
            Sorry, the page probably got lost during the research.
          </p>
          <Link to="/gi-info">
            <button type="button" className={commonstyles["char-btn"]}>
              Home Page
            </button>
          </Link>
        </section>
        <img src={img} className={styles["error-img"]} />
      </main>
    </>
  );
};

export default ErrorPage;
