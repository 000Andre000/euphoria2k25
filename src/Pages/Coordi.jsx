import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { homeNavigation } from "../constants";
import CoordiLayout from "../components/CoordiCard/CoordiLayout";

const Coordi = () => {
  return (
    <>
      <Header />

      <main>
        <CoordiLayout />
      </main>

      <Footer nav={homeNavigation} />
    </>
  );
};

export default Coordi;
