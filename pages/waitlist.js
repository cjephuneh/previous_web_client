import React from "react";
import Head from "next/head"
import Header from "../components/waitlist/header.jsx"
import Sidebar from '../components/waitlist/sidebar.jsx'
import Letstalk from '../components/waitlist/Letstalk.jsx'

const contact = () =>  {
  return (
  <>
    <Head>
      <title>
          Proxima | Waitlist
      </title>
    </Head>
    
    <div className="page-wrapper">
      <Header />
      <div className="section-contact">
        <div className="w-layout-grid contact-component">
          <Sidebar />
          <Letstalk />
        </div>
      </div>
    </div>
    </>
  );
};

export default contact;
