import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <p className="home-p">
        Get info about Genshin Impact characters and weapons.
      </p>

      <Link to="/char-list">
        <button type="button" className="char-btn">
          View Characters
        </button>
      </Link>

      <Link to="/weapon-list">
        <button type="button" className="weapon-btn">
          View weapons
        </button>
      </Link>
    </>
  );
}

export default HomePage;
