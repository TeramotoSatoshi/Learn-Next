import type { NextPage } from "next";
import Head from "next/head";
import MainTag from "src/components/MainTag/MainTag";
import Header from "src/components/Header/Header";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <MainTag title="about" />
    </>
  );
};

export default About;
