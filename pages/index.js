import MainLayout from "../layout/MainLayout";
import HomepageLayout from "../layout/HomepageLayout";
import Head from "next/head";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Todo!</title>
        <meta
          name="description"
          content="Help track your day-to-day activities with this simple website"
        />
      </Head>
      <MainLayout>
        <HomepageLayout />
      </MainLayout>
    </Fragment>
  );
};

export default Home;
