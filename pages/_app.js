import "@/css/normalize.css";
import "@/css/webflow.css";
import "@/css/proxima-main-site.webflow.css";
import "react-modern-drawer/dist/index.css"
import '@/styles/globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import  Script  from "next/script";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script type="text/javascript" src="/scripts/webflow.js" />
      <Script type="text/javascript" src="/scripts/scripts.js" />
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6419710b82d66c9650b1e3ae"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"/>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      
    </>
  );
}
