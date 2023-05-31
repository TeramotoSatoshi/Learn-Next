import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";
import { useEffect } from "react";
import { useState } from "react";

const Home: NextPage = () => {
  const [num, setNum] = useState(1);

  // コンポーネント内に記述する場合はuseCallbackを使う
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  }

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>{num.toString()}</h1>
      <button onClick={handleClick}>ボタン</button>
      <MainTag title="index" />
    </>
  );
};

export default Home;
