import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <p className="home-p">
        Sorry, the page probably got lost during the research.
      </p>
      <Link to="/">
        <button type="button" className="char-btn">
          Home Page
        </button>
      </Link>
    </>
  );
};

export default ErrorPage;
