import React from "react";
import aboutUs1Data from "../../data/about-us1.json";

const AboutUs1 = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="exp-img wow fadeInUp" data-wow-delay=".3s">
              <div
                className="img bg-img wow imago"
                style={{ backgroundImage: `url(${aboutUs1Data.image})` }}
              >
  
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="exp-content wow fadeInUp" data-wow-delay=".3s">
              <h6 className="sub-title">About Us</h6>
              <h2 className="mb-20 playfont">
                {aboutUs1Data.title.first} <br /> {aboutUs1Data.title.second}
              </h2>
              <p>{aboutUs1Data.content}</p>
              <div className="numbers mt-50">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs1;
