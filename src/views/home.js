import React from "react";
import "./home.css";
import Footer from "../components/footer";
import Header from "../components/header";
import image1 from "../assets/images/pexels-photo-11369364.jpeg";
import image2 from "../assets/images/pexels-photo-6801865.jpeg";
import image3 from "../assets/images/pexels-photo-6577508.jpeg";

function Home() {
  return (
    <div>
      <Header />
      {/* login form */}

      {/* login end */}

      <div className="home-container">
        <div className="home-justifycontent">
          <div className="home-justifycontent-partone">
            <div className="col-lg-8 text-center text-lg-start">
              {/* <h5
                className="d-inline-block text-primary text-uppercase border-bottom border-5"
                style={{ borderColor: "rgba(256, 256, 256, 0.3) !important" }}
              >
                Welcome To Ikibondo
              </h5> */}
              <h1 className="display-1 text-white mb-md-4">
                Best Baby Healthcare Solution.
              </h1>
              <div className="pt-2">
                <a
                  href="blog.html"
                  className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                >
                  BLOGS
                </a>
              </div>
            </div>
          </div>
          <div className="home-justifycontent-parttwo"></div>
        </div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src="img/koonsa.webp"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="mb-4">
                  <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                    We are here with you whoever you are
                  </h5>
                  <h1 className="display-4">Our Child our proud</h1>
                </div>
                <p>
                  <b>
                    This project has been done by MSN group, the Group of 3
                    students at University of Rwanda as a final year project but
                    also as a contribution to Rwandan society in the fight
                    against malnutrition in children. this website will help you
                    to know how to take care of young ones and it will also help
                    you to track the health of your child. by registering on
                    this system you will receive messages as a reminder to take
                    your child to the nearest hospital for check up and also
                    remind you when the child must take the vaccine.
                  </b>
                </p>
                <div className="mb-4">
                  <h1 className="display-4">Let build good health together</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Health track start*/}
        <div className="container-fluid bg-primary my-5 py-5">
          <div className="container py-5">
            <div className="row gx-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="mb-4">
                  <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                    BMI calculator
                  </h5>
                  <h1 className="display-4">
                    Calculate the BMI of your child!
                  </h1>
                </div>
                <p className="text-white mb-5">
                  Body mass index (BMI) is a person’s weight in kilograms
                  divided by the square of height in meters. It is an
                  inexpensive and easy way to screen for weight categories that
                  may lead to health problems. For children and teens, BMI is
                  age- and sex-specific and is often referred to as BMI-for-age.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="bg-white text-center rounded p-5">
                  <h1 className="mb-4">ENTER REQUIRED DATA</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={{ height: 55 }}
                        >
                          <option selected>Choose Gender</option>
                          <option value={1}>Male</option>
                          <option value={2}>Female</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="number"
                          className="form-control bg-light border-0"
                          placeholder="weight in kgs"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="number"
                          className="form-control bg-light border-0"
                          placeholder="height in centimeters"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="date"
                          id="date"
                          data-target-input="nearest"
                        >
                          <input
                            type="number"
                            className="form-control bg-light border-0 datetimepicker-input"
                            placeholder="age"
                            style={{ height: 55 }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          <a href="Bmi-result.html" style={{ color: "white" }}>
                            Generate results
                          </a>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blog start */}

        <div className="container-fluid py-5">
          <div className="container">
            <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
              <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                How it works
              </h5>
              <h1 className="display-4">Guidline provided</h1>
            </div>
            <div className="row g-5">
              <div className="col-xl-4 col-lg-6">
                <div className="bg-light rounded overflow-hidden">
                  <img className="img-fluid w-100 img" src={image1} alt />
                  <div className="p-4">
                    <a className="h3 d-block mb-3" href="detail.html">
                      Vaccinations: Check your baby's vaccination status
                    </a>
                    <p className="m-0">
                      vaccination helps keep your baby healthy. vaccination is
                      always ready and good for the environment.
                    </p>
                  </div>
                  <div className="d-flex justify-content-between border-top p-4">
                    <div className="d-flex align-items-center">
                      <div className="button">
                        <a
                          href="/vaccine"
                          className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="bg-light rounded overflow-hidden">
                  <img className="img-fluid w-100 img" src={image2} alt />
                  <div className="p-4">
                    <a className="h3 d-block mb-3" href>
                      BMI Calculate: Check your child status
                    </a>
                    <p className="m-0">
                      We provide an easy and quick way to measure the status of
                      your child
                    </p>
                  </div>
                  <div className="d-flex justify-content-between border-top p-4">
                    <div className="d-flex align-items-center">
                      <div className="button">
                        <a
                          href="/vaccine"
                          className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="bg-light rounded overflow-hidden">
                  <img className="img-fluid w-100 img" src={image3} alt />
                  <div className="p-4">
                    <a className="h3 d-block mb-3" href>
                      Blogs and Advices
                    </a>
                    <p className="m-0">
                      Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                      rebum clita rebum dolor stet amet justo
                    </p>
                  </div>
                  <div className="d-flex justify-content-between border-top p-4">
                    <div className="d-flex align-items-center">
                      <div className="button">
                        <a
                          href="/vaccine"
                          className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blog end */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
