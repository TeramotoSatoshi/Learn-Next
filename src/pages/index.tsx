import Head from "next/head";
import type { NextPage } from "next";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <MainTag title="index" />
    </>
  );
};

export default Home;
