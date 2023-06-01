import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState<string[]>([]);

  // レンダリングされたら実行
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  // ボタン押下
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
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
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  // 配列追加
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("配列内に同一の要素が存在します");
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

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
