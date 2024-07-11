import "./Experience.css";
import Navbar from "./Navbar";
import OJT1Image from "./img/ojt1.jpeg"
import OJT2Image from "./img/ojt2.jpeg"
import OJT3Image from "./img/ojt3.jpeg"
import OJT4Image from "./img/ojt4.jpeg"
import OJT5Image from "./img/ojt5.jpeg"
import OJT6Image from "./img/ojt6.jpeg"

const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="ontoy">

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-2 pt-2">
                Experiences
              </h1>
    <div className="exp">
    <div className="container">
          <hr/>
          <div className="row mb-5">
            <h3 className="text-center">On-the Job Training</h3>
            <hr />
          <div className="col-lg-4">
          <img className="two" src={OJT1Image} />
          <img className="two" src={OJT2Image} />
          <h4 className="three text-black">Ring binding papers</h4>
          </div>
          <div className="col-lg-4">
          <img className="one" src={OJT3Image} />
          <img className="one" src={OJT4Image} />
          <h4 className="three text-black">Arranging papers in alphabetical order</h4>
          </div>
          <div className="col-lg-4">
          <img className="three" src={OJT5Image} />
          <img className="three" src={OJT6Image} />
          <h4 className="three text-black">Encoding evaluations of students</h4>
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

export default Experience;
