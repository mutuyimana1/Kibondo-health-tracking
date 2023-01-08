import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <div className="container-fluid bg-dark text-light mt-5 py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  FOLLOW US
                </h4>
                <br />
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                  href="#"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  Quick Links
                </h4>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Home
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    About Us
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Our Services
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Meet The Team
                  </a>
                  <a className="text-light mb-2" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Latest Blog
                  </a>
                  <a className="text-light" href="#">
                    <i className="fa fa-angle-right me-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  COMMENT
                </h4>
                <form action>
                  <div>
                    <input
                      type="text"
                      className="form-control p-3 border-0"
                      placeholder="Your name"
                    />
                    <br />
                    <input
                      type="text"
                      className="form-control p-3 border-0"
                      placeholder="Your Email Address"
                    />
                    <br />
                    <textarea
                      className="form-control"
                      id="COMMENT"
                      placeholder="Your comment"
                      rows={3}
                      defaultValue={""}
                    />
                    <br />
                    <button className="btn btn-primary">SUBMIT</button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-md-6">
                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                  &nbsp;&nbsp;General advise
                </h4>
                <div
                  className="bg-dark rounded text-center"
                  style={{ padding: 30 }}
                >
                  <p>
                    It is recommended that you go to the nearest hospital if you
                    see anything suspicious or if you experience any symptoms of
                    illness on your baby. We will have a better nation for today
                    and tomorrow if we treat our children better!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  ©{" "}
                  <a className="text-primary" href="#">
                    Ikibondo.com
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
