import Image from "next/image";
import styles from "./Links.module.css";

const ITEMS = [
  { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Docs", description: "Find in-depth information about Next.js features and API." },
  { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Learn", description: "Learn about Next.js in an interactive course with quizzes!" },
  { href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Templates", description: "Discover and deploy boilerplate example Next.js projects." },
  { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Deploy", description: "Instantly deploy your Next.js site to a shareable URL with Vercel." },
];

const Links: React.FC = () => {
  return (
    <>
      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>

      <div className={styles.grid}>
        {ITEMS.map((item) => {
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
