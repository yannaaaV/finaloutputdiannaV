import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage2 from "./img/calculator.png"
import portfolio1Image from "./img/portfolio.png"
import portfolio2Image from "./img/portfolio1.png"
import dfdImage from "./img/dfd.png"
import dfd1Image from "./img/dfd1.png"
import capstoneImage from "./img/soil moisture.png"
import capstone1Image from "./img/temperature.png"
import capstone2Image from "./img/humidity.png"
import capstone3Image from "./img/water level.png"
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="yanna">
       
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Portfolio 
              </h1>
      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h3> My Projects:</h3>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage2} />
          <h4 className="mt-5">Calculator</h4>
          </div>
          <div className="col">
          <img className="three" src={dfdImage} />
          <img className="three" src={dfd1Image} />
          <h4 className="mt-5">System Integrations</h4>
          </div>
          <div className="col">
          <img className="four" src={capstoneImage} />
          <img className="four" src={capstone1Image} />
          <img className="four" src={capstone2Image} />
          <img className="four" src={capstone3Image} />
          <h4 className="mt-5">Capstone Project</h4>
          </div>
          <div className="col">
          <img className="two" src={portfolio1Image} />
          <img className="two" src={portfolio2Image} />
          <h4 className="mt-5">My Portfolio Website</h4> 
          </div>
          </div>
        </div>
      </div>
      </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Portfolio;
