import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

function About() {
  return (
    <div>
      <Header />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="img/about.jpg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  About Us
                </h5>
                <h1 className="display-4">MEET OUR TEAM</h1>
              </div>
              <p>
                <b>
                  This project has been done by MSN group, the Group of 3
                  students at University of Rwanda as a final year project but
                  also as a contribution to Rwandan society in the fight against
                  malnutrition in children. this website will help you to know
                  how to take care of young ones and it will also help you to
                  track the health of your child. by registering on this system
                  you will receive messages as a reminder to take your child to
                  the nearest hospital for check up and also remind you when the
                  child must take the vaccine.
                </b>
              </p>
              <div className="mb-4">
                <h1 className="display-4">
                  Together we Build a Wealthy Nation
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
