import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state?.auth);

  const [babies, setBabies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [mothers, setMothers] = useState([]);
  const [isMotherFecthing, setIsMotherFetching] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [isHospitalFetching, setIsHospitalFetching] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserFetching, setIsUserFetching] = useState(false);
  const navigate = useNavigate();
  const fetchUsers = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/user/all")
      .then((res) => {
        setUsers(res.data.data);
        setIsUserFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsUserFetching(false);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    if (!user.token) {
      navigate("/");
    }
  }, [user]);

  const fetchHospitals = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/hospital/hospitals")
      .then((res) => {
        setHospitals(res.data.data);
        setIsHospitalFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsHospitalFetching(false);
      });
  };
  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchBabies = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/baby/all")
      .then((res) => {
        setBabies(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchBabies();
  }, []);

  const fetchMothers = () => {
    setIsMotherFetching(true);
    axios
      .get("http://localhost:4040/parent/all")
      .then((res) => {
        setMothers(res.data.data);
        setIsMotherFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsMotherFetching(false);
      });
  };

  useEffect(() => {
    fetchMothers();
  }, []);
  return (
    <div>
      <div className="main-wrapper">
        <div>
          <Sidebar />
          <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg1">
                      <i className="fa fa-users" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{users.length}</h3>
                      <span>
                        {" "}
                        <a
                          href="users"
                          className="widget-title1"
                          style={{ color: "black" }}
                        >
                          System Users{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg2">
                      <i className="fa fa-child" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{babies.length}</h3>
                      <span className="widget-title2">
                        <a href="registeredbabies" style={{ color: "black" }}>
                          Babies
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg3">
                      <i className="fa fa-female" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{mothers.length}</h3>
                      <span className="widget-title3">
                        <a href="/parents" style={{ color: "black" }}>
                          Mothers
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                  <div
                    className="dash-widget"
                    style={{ boxShadow: "2px 2px 2px 2px" }}
                  >
                    <span className="dash-widget-bg4">
                      <i className="fa fa-hospital-o" aria-hidden="true" />
                    </span>
                    <div className="dash-widget-info text-right">
                      <h3>{hospitals.length}</h3>
                      <span className="widget-title4">
                        {" "}
                        <a href="/hospitals" style={{ color: "black" }}>
                          Hospitals
                        </a>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*FIXME FIXME FIXME*/}
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="card" style={{ boxShadow: "2px 2px" }}>
                    <div className="card-header">
                      <h4 className="card-title d-inline-block">
                        Sample Registerd Babies
                      </h4>
                      <a
                        href="/registeredbabies"
                        className="btn btn-primary float-right"
                      >
                        View all
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead className="d-none">
                            <tr>
                              <th>Full Name</th>
                              <th>Parent's </th>
                              <th>Date of birth</th>
                            </tr>
                          </thead>
                          <tbody>
                            {isFetching ? (
                              <center>Retrieving babies ...</center>
                            ) : (
                              <>
                                {babies.map((bab, index) => (
                                  <tr>
                                    <td style={{ minWidth: 200 }}>
                                      <a className="avatar" href="#">
                                        J
                                      </a>
                                      <h2>
                                        <a href="#">
                                          {bab.firstName}{" "}
                                          <span>{bab.province}</span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <h5 className="time-title p-0">
                                        Parent's contact
                                      </h5>
                                      <p> {bab.telephone}</p>
                                    </td>
                                    <td>
                                      <h5 className="time-title p-0">DOB</h5>
                                      <p> {bab.dateOfBirth}</p>
                                    </td>
                                  </tr>
                                ))}
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="card" style={{ boxShadow: "-2px -2px" }}>
                    <div className="card-header">
                      <h4 className="card-title d-inline-block">
                        Expectant Mothers
                      </h4>
                      <a
                        href="/parents"
                        className="btn btn-primary float-right"
                      >
                        View all
                      </a>
                    </div>
                    <div className="card-block">
                      <div className="table-responsive">
                        <table className="table mb-0 new-patient-table">
                          <tbody>
                            {isMotherFecthing ? (
                              <center>Retrieving Mothers...</center>
                            ) : (
                              <>
                                {mothers.map((math, index) => (
                                  <tr>
                                    <td>
                                      <img
                                        width={28}
                                        height={28}
                                        className="rounded-circle"
                                        src="assets/img/user.jpg"
                                        alt
                                      />
                                      <h2>{math.lastName}</h2>
                                    </td>
                                    <td>{math.district}</td>
                                    <td>{math.telephone}</td>
                                    <td>{math.registeredDate}</td>
                                  </tr>
                                ))}
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
