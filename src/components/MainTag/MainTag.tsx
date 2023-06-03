import { Inter } from "next/font/google";
import Links from "src/components/Links/Links";
import Headline from "src/components//Headline/Headline";
import styles from "src/components/MainTag/MainTag.module.css";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface MainTagProps {
  title: string;
}

const ITEMS: Array<LinkItem> = [
  { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Docs", description: "Find in-depth information about Next.js features and API." },
  { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Learn", description: "Learn about Next.js in an interactive course with quizzes!" },
  { href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Templates", description: "Discover and deploy boilerplate example Next.js projects." },
  { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", title: "Deploy", description: "Instantly deploy your Next.js site to a shareable URL with Vercel." },
];

const MainTag: React.FC<MainTagProps> = (props) => {
  const [items, setItems] = useState<LinkItem[]>(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title={props.title} handleReduce={handleReduce}>
          <code className={styles.code}>{items.length}</code>
        </Headline>
        <Links items={items} handleReduce={handleReduce} />
      </main>
    </>
  );
};

export default MainTag;
