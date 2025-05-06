/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img three-col py-5">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install 002.jpg" alt="" />
                </div>
                <div className="cont">
                  {/* <h5>
                  
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install 003.jpg" alt="" />
                </div>
                <div className="cont">
                  {/* <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install 005.jpg" alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install 006.jpg" alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install 007.jpg" alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install.jpg" alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/install 004.jpg" alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/IMG_9680.jpeg" alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/slid/IMG_9640.jpeg   " alt="" />
                </div>
                {/* <div className="cont">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
