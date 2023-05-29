import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";

interface HeadlineProps {
  title: string;
  children: React.ReactNode;
}

const Headline: React.FC<HeadlineProps> = (props) => {
  return (
    <>
      <div className={styles.description}>
        <p>Get started by editing&nbsp;{props.children}</p>
        <div>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            Thanks By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority={true} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Headline;