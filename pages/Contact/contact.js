import React from "react";
import Head from "next/head"
import Header from "../../components/contactus/header.jsx"
import Sidebar from '../../components/contactus/sidebar.jsx'
import Letstalk from '../../components/contactus/Letstalk.jsx'

function contact  ()  {
  return (
  <>
    <Head>
      <title>
          Proxima | ContactUs
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
