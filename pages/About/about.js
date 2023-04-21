import React from "react";
import Head from "next/head";
import Home from '../../components/aboutus/home.jsx'
import WhyChooseUs from '../../components/aboutus/whychooseus.jsx'
import Projects from '../../components/aboutus/projects.jsx'
import Team from '../../components/aboutus/team.jsx'
import Features from '../../components/aboutus/features.jsx'
import FrequentlyAsked from '../../components/aboutus/frequentasked.jsx'
import TrackUser from '../../components/aboutus/trackuser.jsx'

function about () {
  return (
    <>

    <Head>
      <title>
          Proxima | About
      </title>
    </Head>
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Home />     
        <WhyChooseUs /> 
        <Projects /> 
        <Team />
        <Features />
        <FrequentlyAsked />
        <TrackUser />

      </main>
    </div>
    </>
  );
};

export default about;
