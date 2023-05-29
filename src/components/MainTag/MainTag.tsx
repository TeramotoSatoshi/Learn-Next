import { Inter } from "next/font/google";
import Links from "src/components/Links/Links";
import Headline from "src/components//Headline/Headline";
import styles from "src/components/MainTag/MainTag.module.css";

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
