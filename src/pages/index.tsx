import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  // レンダリングされたら実行
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
    // [count]とすることでcountが変更されたタイミングで再実行される
  }, [count]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>{count.toString()}</h1>
      <button onClick={handleClick}>ボタン</button>
      <MainTag title="index" />
    </>
  );
};

export default Home;
