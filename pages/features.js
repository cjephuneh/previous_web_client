import React from "react";
import Head from 'next/head'
import Home from '../components/features/home.jsx'
import Companies from '../components/utils/companies.jsx'
import Features from '../components/utils/features.jsx'
import FrequentlyAsked from '../components/utils/frequentasked.jsx'
import TrackUser from '../components/utils/trackuser.jsx'

const features = () => {
  return (
    <>
    <Head>
      <title>
        Proxima | Features
      </title>
    </Head>

    <div className="page-wrapper">
    <main className="main-wrapper">
      <Home />
      {/*<Companies />*/}
      {/* <Features /> */}
      <FrequentlyAsked />
      <TrackUser />
    </main>
  </div>
  </>
  );
};

export default features;