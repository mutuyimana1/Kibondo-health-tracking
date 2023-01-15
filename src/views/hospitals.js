import axios from "axios";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/dashboardContent/sidebar";
import { CircularProgress } from "@mui/material";
function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchHospitals = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/hospital/hospitals")
      .then((res) => {
        setHospitals(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchHospitals();
  }, []);

  return (
    <div>
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title">Registerd Hospitals</h4>
              </div>
              <div className="col-sm-8 col-9 text-right m-b-20">
                <a
                  href="/addhospital"
                  className="btn btn btn-primary btn-rounded float-right"
                >
                  <i className="fa fa-plus" /> Add Hospital
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>#</th>

                        <th>Name</th>
                        <th>Province</th>
                        <th>District</th>
                        <th>Sector</th>
                        <th>cell</th>
                        <th>Hot line</th>
                        <th>Director</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isFetching ? (
                        <center
                          style={{ paddingTop: "100px", paddingLeft: "250px" }}
                        >
                          <CircularProgress />
                        </center>
                      ) : (
                        <>
                          {hospitals.map((hosp, index) => (
                            <tr key={index}>
                              <td> {index + 1}</td>
                              <td>{hosp.name}</td>
                              <td>{hosp.province}</td>
                              <td>{hosp.district}</td>
                              <td>{hosp.sector}</td>
                              <td>{hosp.cell}</td>
                              <td>{hosp.director}</td>
                              <td>{hosp.hotline}</td>

                              <td className="text-right">
                                <div className="dropdown dropdown-action">
                                  <a
                                    href="#"
                                    className="action-icon dropdown-toggle"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fa fa-ellipsis-v" />
                                  </a>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#">
                                      <i className="fa fa-pencil m-r-5" /> Edit
                                    </a>
                                    <a
                                      className="dropdown-item"
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#delete_appointment"
                                    >
                                      <i className="fa fa-trash-o m-r-5" />{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
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
        <div
          id="delete_appointment"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src="assets/img/sent.png" alt width={50} height={46} />
                <h3>Are you sure want to delete this hospital?</h3>
                <div className="m-t-20">
                  {" "}
                  <a href="#" className="btn btn-white" data-dismiss="modal">
                    Close
                  </a>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
