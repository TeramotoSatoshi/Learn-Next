import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  // レンダリングされたら実行
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  // ボタン押下
  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  // テキスト変更
  const handleChange = useCallback(
    (e: any) => {
      setText(e.target.value);
    },
    [text]
  );

  // 表示変更
  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, [isShow]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {isShow ? <h1>{count.toString()}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <MainTag title="index" />
    </>
  );
};

export default Home;
