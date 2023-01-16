import React, { useState } from "react";
import "./home.css";
import Footer from "../components/footer";
import Header from "../components/header";
import image1 from "../assets/images/pexels-photo-11369364.jpeg";
import image2 from "../assets/images/pexels-photo-6801865.jpeg";
import image3 from "../assets/images/pexels-photo-6577508.jpeg";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

function Home() {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [telephone, setTelephone] = useState("");
  const [age, setAge] = useState("");
  const [BMI_Percentile, setBMI_Percentile] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const HealthTrack = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(gender, weight, height, age);
    axios
      .post("http://localhost:4040/measure/fill", {
        gender,
        weight,
        height,
        age,
        BMI_Percentile,
        message,
        telephone,
      })
      .then((res) => {
        console.log("result value", res);
        setBMI_Percentile(res.data.BMI_Percentile);
        setMessage(res.data.message);
        setTelephone(res.data.telephone);
        setCategory(res.data.readBlog.searchKeyword);

        // setGender("");
        // setWeight("");
        // setHeight("");
        // setBMI_Percentile("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Header />
      <Modal
        open={open}
        maxWidth="lg"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="col-lg-12">
            <div className="bg-white text-center rounded p-5">
              <h1 className="mb-4">BMI PERCENTILE RESULT</h1>
              <table>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                  th {\n                         width:100%              color: white;\n                    padding-left: 5px;\n                    border-bottom: 1px solid #ddd;\n                  }\n                  tr {\n                    background-color: azure;\n                    font-size: small;\n                  }\n                  td {\n                    height: 70px;\n                  }\n                ",
                  }}
                />
                <tbody>
                  <tr>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Weight (in pound)</th>
                    <th>height (in inches)</th>
                    <th>BMI Percetile Result</th>
                    <th colSpan={2}>Comment</th>
                  </tr>
                  <tr>
                    <td>{age}</td>
                    <td>{gender}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                    <td>{BMI_Percentile}</td>
                    <td>{message}</td>
                    <td>
                      {" "}
                      <Link
                        className="advice"
                        to={"/blogs/" + category.toLowerCase()}
                      >
                        View Advice
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Box>
      </Modal>
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
                  href="/blogs"
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
                          name={gender}
                          onChange={(e) => setGender(e.target.value.toString())}
                        >
                          <option selected>Choose Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="number"
                          className="form-control bg-light border-0"
                          placeholder="weight in ponds"
                          style={{ height: 55 }}
                          name={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="number"
                          className="form-control bg-light border-0"
                          placeholder="telephone"
                          style={{ height: 55 }}
                          name={telephone}
                          onChange={(e) => setTelephone(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="number"
                          className="form-control bg-light border-0"
                          placeholder="height in inches"
                          style={{ height: 55 }}
                          name={height}
                          onChange={(e) => setHeight(e.target.value)}
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
                            name={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                          onClick={HealthTrack}
                        >
                          <a style={{ color: "white" }} onClick={handleOpen}>
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
                    <a className="h3 d-block mb-3" href="#">
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
