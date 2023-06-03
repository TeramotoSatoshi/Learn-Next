import type { NextPage } from "next";
import Head from "next/head";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";

interface pageProps {
  count: number;
  doubleCount: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
}

const About: NextPage<pageProps> = (props) => {
  const { doubleCount, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{doubleCount}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>配列追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <MainTag title="about" />
    </>
  );
};

export default About;
