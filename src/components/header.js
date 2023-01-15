import React, { useEffect, useState } from "react";
import "../views/home.css";
import image3 from "../assets/images/pexels-photo-6577508.jpeg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseCircleOutlined from "@ant-design/icons";
import { registerUserAction, loginUserAction } from "../redux/auth/actions";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch, useSelector } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    handleCloseModal();
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpen(false);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    handleClose();
    setOpenModal(true);
  };
  const handleCloseModal = (event, reason) => {
    if (reason && reason == "backdropClick") return;
    setOpenModal(false);
  };

  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [password, setPassword] = useState();
  const [conformPassword, setConfirmPassword] = useState();
  const [hospitalName, setHospitalName] = useState();
  const [telephone, setTelephone] = useState();
  const [gender, setGender] = useState();
  const [position, setPosition] = useState();
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState();
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const { token, isFetching } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const login = () => {
    loginUserAction({ emailLogin, passwordLogin })(dispatch);
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div>
      {/* <div className="login-container">
        <div className="login-popup" id="popup">
          <img src={image3} />
          <h1>Thank you!!</h1>
          <p>gavdvsdvyasdvyvdsyavydvytvtvstvcvsvcvbsdgcvdcgvdg</p>

          <button type="button" onClick={closepopup}>
            ok
          </button>
        </div>
      </div> */}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <span onClick={() => handleClose()}>close</span>
              <h1 style={{ textAlign: "center" }}>Login</h1>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form className="form">
                <div className="row g-3 textField-content">
                  <TextField
                    id="outlined-basic"
                    label="Enter Email"
                    variant="outlined"
                    sx={{ marginBottom: "20px", marginTop: "30px" }}
                    onChange={(e) => setEmailLogin(e.target.value)}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Enter password"
                    variant="outlined"
                    onChange={(e) => setPasswordLogin(e.target.value)}
                  />

                  <div className="col-12">
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Don't have an account?{" "}
                    <a href="#" onClick={handleOpenModal}>
                      Register
                    </a>
                    {/*FIXME FIXME TODO TODO*/}
                    {/* <button
                      className="btn btn-primary w-100 py-3"
                      // type="submit"
                      style={{ marginTop: "20px" }}
                    > */}
                    <LoadingButton
                      // href="/dashboard"
                      loading={isFetching}
                      onClick={() => {
                        console.log({ emailLogin, passwordLogin });
                        login();
                      }}
                      className="btn btn-primary"
                      style={{ fontSize: "20px" }}
                    >
                      Login
                    </LoadingButton>
                    {/* </button> */}
                  </div>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <CloseCircleOutlined style={{ color: "red !important" }} /> */}{" "}
            <span onClick={() => handleCloseModal()}>close</span>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h1 style={{ textAlign: "center" }}>Register here</h1>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <form className="form">
                <div className="row g-3 textField-content">
                  <div style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      label="Enter first name"
                      variant="outlined"
                      sx={{ marginBottom: "20px", width: "300px" }}
                      onChange={(e) => setFirstName(e.target.value)}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Enter second name"
                      variant="outlined"
                      sx={{ marginLeft: "20px", width: "300px" }}
                      onChange={(e) => setSecondName(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      label="Hospital name"
                      variant="outlined"
                      sx={{ marginBottom: "20px", width: "300px" }}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />

                    <TextField
                      id="outlined-basic"
                      label="your position"
                      variant="outlined"
                      sx={{ marginLeft: "20px", width: "300px" }}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      label="Enter phone number"
                      variant="outlined"
                      sx={{ marginBottom: "20px", width: "300px" }}
                      onChange={(e) => setTelephone(e.target.value)}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Enter Email"
                      variant="outlined"
                      sx={{ marginLeft: "20px", width: "300px" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      label="Enter password"
                      variant="outlined"
                      sx={{ marginBottom: "20px", width: "300px" }}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <TextField
                      id="outlined-basic"
                      label="confirm password"
                      variant="outlined"
                      sx={{ marginLeft: "20px", width: "300px" }}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <TextField
                    id="outlined-basic"
                    label="enter your gender"
                    variant="outlined"
                    sx={{ marginLeft: "20px", width: "300px" }}
                    onChange={(e) => setGender(e.target.value)}
                  />

                  <div className="col-12">
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; Orleady have an account?{" "}
                    <a
                      onClick={handleOpen}
                      className="primary"
                      style={{ fontSize: "20px" }}
                    >
                      Login
                    </a>
                    {/*FIXME FIXME TODO TODO*/}
                    <button
                      className="btn btn-primary w-100 py-3"
                      // type="submit"
                      style={{ marginTop: "20px" }}
                    >
                      <LoadingButton
                        // href="/dashboard"

                        loading={isFetching}
                        className="btn btn-primary"
                        style={{ fontSize: "20px" }}
                        onClick={(e) => {
                          e.preventDefault();
                          console.log({
                            firstName,
                            secondName,
                            email,
                            telephone,
                            password,
                            conformPassword,
                            hospitalName,
                            position,
                            gender,
                          });
                          registerUserAction({
                            firstName,
                            secondName,
                            email,
                            telephone,
                            password,
                            conformPassword,
                            hospitalName,
                            position,
                            gender,
                          })(dispatch);
                        }}
                      >
                        Register
                      </LoadingButton>
                    </button>
                  </div>
                </div>
              </form>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href>
                  <i className="bi bi-telephone me-2" />
                  +250 782099213
                </a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href>
                  <i className="bi bi-envelope me-2" />
                  ikibondo@gmail.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href>
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="text-body px-2" href>
                  <i className="fab fa-twitter" />
                </a>
                <a className="text-body px-2" href>
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-body ps-2" href>
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="/" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">Ikibondo</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link ">
                  About us
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="/blogs" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="#" className="dropdown-item">
                      BMI Results
                    </a>
                    <a href="#" className="dropdown-item">
                      The Team
                    </a>
                    <a href="#" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="#" className="dropdown-item">
                      Health measure
                    </a>
                  </div>
                </div>
                <a href="/contactus" className="nav-item nav-link">
                  Contact
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Register/Login
                  </a>
                  <div className="dropdown-menu m-0">
                    <a className="dropdown-item" onClick={handleOpen}>
                      Nurse/Doctor
                    </a>
                    <a className="dropdown-item" onClick={handleOpen}>
                      User
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
