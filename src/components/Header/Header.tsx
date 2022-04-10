import logo from "./logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo" className={styles.img} />
      </header>
    </>
  );
};

export default Header;
