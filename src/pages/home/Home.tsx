import Header from "../../components/header/Header";
import Intro from "../../components/Intro/Intro";
import SliderImg from "../../components/sliderImg/SliderImg";
import ReactFullpage from "@fullpage/react-fullpage";
import BoxContent from "../../components/boxContent/BoxContent";
import History from "../../components/history/History";
import Flag from "../../components/flag/Flag";

import "./home.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import NavFixed from "../../components/navFixed/NavFixed";

const Home: React.FC = () => {

  return (
    <>
      <NavFixed/>
      <ReactFullpage
        //fullpage options
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        navigation={true}
        // normalScrollElements={".history_scroll"}
        render={({ state, fullpageApi }) => {
          return (
            <div className="wrap">
              <Header />
              <SliderImg />
              <BoxContent />
              <History />
              <Flag />
            </div>
          );
        }}
      />
    </>
  );
};

export default Home;
