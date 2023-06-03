import Image from "next/image";
import styles from "src/components/Links/Links.module.css";

const Links: React.FC<LinksProps> = (props) => {
  return (
    <>
      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
      <div className={styles.grid}>
        {props.items.map((item: LinkItem) => {
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
