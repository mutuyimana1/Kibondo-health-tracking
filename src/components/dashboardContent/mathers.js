import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import CircularProgress from "@mui/material/CircularProgress";
function Parents() {
  const [parents, setParents] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchParents = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/Parent/all")
      .then((res) => {
        setParents(res.data.data);
        console.log(res);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchParents();
  }, []);

  return (
    <div>
      <Sidebar />
      <div>
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title">Registerd Expectant Mothers</h4>
              </div>
              <div className="col-sm-8 col-9 text-right m-b-20">
                <a
                  href="#"
                  className="btn btn btn-primary btn-rounded float-right"
                >
                  <i className="fa fa-plus" /> Add Mother
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped custom-table">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Phone number</th>
                        <th>National ID</th>
                        <th>Province</th>
                        <th>District</th>
                        <th>Sector</th>
                        <th>cell</th>
                        <th>Hospital</th>
                        <th>Registered Date</th>

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
                          {parents.map((pare, index) => (
                            <tr key={index}>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  src="assets/img/user.jpg"
                                  className="rounded-circle m-r-5"
                                  alt=""
                                />{" "}
                                {pare.firstName}
                                {/* {`${pare.firstName} ${pare.secondName}`} */}
                              </td>
                              <td>{pare.age}</td>
                              <td>{pare.telephone}</td>
                              <td>{pare.nationalId}</td>
                              <td>{pare.province}</td>
                              <td>{pare.district}</td>
                              <td>{pare.sector}</td>
                              <td>{pare.cell}</td>
                              <td>{pare.hospital}</td>
                              <td>{pare.registeredDate}</td>
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
                <img src="assets/img/sent.png" alt="" width={50} height={46} />
                <h3>Are you sure want to delete this mother?</h3>
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

export default Parents;
