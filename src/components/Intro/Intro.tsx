import { Link } from "react-router-dom";
import "./intro.scss"

const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro_container">
          <h1>everything <br/> is in the <br /> conceptcube</h1>
          <Link to="/">ConceptCube Company Introduction</Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
