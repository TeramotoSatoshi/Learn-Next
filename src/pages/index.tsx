import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";
import { useInputArray } from "src/hooks/useInputArray";
import { useCounter } from "src/hooks/useCounter";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

const Home: NextPage = () => {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>配列追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <MainTag title="index" />
    </>
  );
};

export default Home;
