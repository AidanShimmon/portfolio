import React from "react";
import { Helmet } from "react-helmet"

// Components
import GlobalStyles from "./GlobalStyle";
import SEO from "./Seo";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Aidan Shimmon portfolio"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <SEO/>
      <GlobalStyles />
      <Nav/>
      <div className="content">
          {children}
      </div>
      <Footer/>
    </>
  );
}