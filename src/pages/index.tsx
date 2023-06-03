import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";

const Home: NextPage<homePageProps> = (props) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>配列追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <MainTag title="index" />
    </>
  );
};

export default Home;
