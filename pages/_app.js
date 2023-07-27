import "@/css/normalize.css";
import "@/css/webflow.css";
import "@/css/proxima-main-site.webflow.css";
import "react-modern-drawer/dist/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import React, { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Create the iframe element
  //   const iframe = document.createElement("iframe");
  //   iframe.src = "https://iframe.proximaai.co/?community_id=1";
  //   iframe.style.position = "fixed";
  //   iframe.style.bottom = "20px";
  //   iframe.style.right = "20px";
  //   iframe.style.width = "800px";
  //   iframe.style.height = "1000px";
  //   iframe.style.border = "none";
  //   iframe.style.zIndex = "9999";
  //   document.body.appendChild(iframe);

  //   return () => {
  //     // Clean up the iframe when the component unmounts
  //     document.body.removeChild(iframe);
  //   };
  // }, []);

  return (
    <Provider store={store}>
      <Script type="text/javascript" src="/scripts/webflow.js" />
      <Script type="text/javascript" src="/scripts/scripts.js" />
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6419710b82d66c9650b1e3ae"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
