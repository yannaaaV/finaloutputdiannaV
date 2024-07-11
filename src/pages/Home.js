import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/homewall.png"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
         


        <div className="container mt-3">
          <div className="row ok">
            <div className="col-lg-6">
                <img src={myImage} />
            </div>
            <div className="col-lg-6">
              <div className="card">
              <h2 className=" fw-bold display-3 text-center text-white mb-5">
                <br></br><br></br><br></br>
                HELLO! <br/>  </h2><h2 className=" fw-bold display-3 text-center text-black mb-5">I'M DIANNA ROSE N. VIAJANTE
              </h2>
              <h4 className=" text-black text-center mt-3"> Ineterested in programming and I'm eager to connect with professionals in the field and gain insights that can help me shape my career path. </h4>
              <center>
              <a href="/about" className="btn shadow mt-3 fw-bold">
                Explore More
              </a>
              </center>
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

export default Home;
