import Header from "../../components/header/Header";
import Intro from "../../components/Intro/Intro";
import SliderImg from "../../components/sliderImg/SliderImg";
import ReactFullpage from "@fullpage/react-fullpage";
import BoxContent from "../../components/boxContent/BoxContent";
import History from "../../components/history/History";
import Flag from "../../components/flag/Flag";

import "./home.scss"

const Home: React.FC = () => {
  return (
    <ReactFullpage
      //fullpage options
      //fullpage options
      licenseKey={"abc"}
      scrollingSpeed={2000} /* Options here */
      scrollHorizontally={true} /* Because we are using the extension */
      scrollHorizontallyKey={"def"}
      scrollBar= {true}
      scrollOverflow= {true}
      easingcss3= {"ease"}
      navigation
      animateAnchor= {true}
      render={({ state, fullpageApi }) => {
        console.log(state, fullpageApi)
        return (
          <div className="wrap">
            <Header />
            <SliderImg />
            <BoxContent/>
            <History/>
            <Flag/>
          </div>
        );
      }}
    />
  );
};

export default Home;
