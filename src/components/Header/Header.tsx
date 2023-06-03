import Link from "next/link";
import styles from "src/components/Header/Header.module.css";

type navItemsProps = {
  href: string;
  label: string;
};

const NAV_ITEMS: Array<navItemsProps> = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} id={styles.link}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
