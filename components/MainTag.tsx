import { Inter } from "next/font/google";
import Links from "@/components/Links";
import Headline from "@/components/Headline";
import styles from "./MainTag.module.css";

const inter = Inter({ subsets: ["latin"] });

interface MainTagProps {
  title: string;
}

const MainTag: React.FC<MainTagProps> = (props) => {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title={props.title}>
          <code className={styles.code}>pages/{props.title}.js</code>
        </Headline>
        <Links />
      </main>
    </>
  );
};

export default MainTag;
