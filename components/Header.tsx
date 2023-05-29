import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/" id={styles.link}>
          Index
        </Link>
        <Link href="/about" id={styles.link}>
          About
        </Link>
      </header>
    </>
  );
};

export default Header;
