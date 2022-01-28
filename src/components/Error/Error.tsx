import { Link } from "react-router-dom";
import commonstyles from "../../common/Styles.module.scss";

const ErrorPage = () => {
  return (
    <>
      <div className={commonstyles["main-home-error"]}>
        <p className={commonstyles["home-error-p"]}>
          Sorry, the page probably got lost during the research.
        </p>
        <Link to="/">
          <button type="button" className={commonstyles["char-btn"]}>
            Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
