import Image from "next/image";
import styles from "src/components/Links/Links.module.css";

type LinkItem = {
  href: string;
  title: string;
  description: string;
};

interface LinksProps {
  items: LinkItem[];
  handleReduce: () => void;
}

const Links: React.FC<LinksProps> = ({ items, handleReduce }) => {
  return (
    <>
      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
      <div className={styles.grid}>
        {items.map((item: LinkItem) => {
          return (
            <a key={item.href} href={item.href} className={styles.card}>
              <h2 className={styles.title}>
                {item.title} <span>-&gt;</span>
              </h2>
              <p className={item.description}>{item.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Links;
