import React from "react";
import Sidebar from "./sidebar";

function Mathers() {
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
                  href="add mother.html"
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
                        <th>Today's Date</th>
                        <th>CheckUP date</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            width={28}
                            height={28}
                            src="assets/img/user.jpg"
                            className="rounded-circle m-r-5"
                            alt
                          />{" "}
                          Denise MUHORAKEYE
                        </td>
                        <td>35</td>
                        <td>0788400878</td>
                        <td>1199880155756028</td>
                        <td>Kigali</td>
                        <td>Kicukiro</td>
                        <td>Nyarugunga</td>
                        <td>Nonko</td>
                        <td>RMH</td>
                        <td>12/11/2022</td>
                        <td>1/01/2023</td>
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
                              <a
                                className="dropdown-item"
                                href="edit mother.html"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_appointment"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            width={28}
                            height={28}
                            src="assets/img/user.jpg"
                            className="rounded-circle m-r-5"
                            alt
                          />{" "}
                          Denise MUHORAKEYE
                        </td>
                        <td>35</td>
                        <td>0788400878</td>
                        <td>1199880155756028</td>
                        <td>Kigali</td>
                        <td>Kicukiro</td>
                        <td>Nyarugunga</td>
                        <td>Nonko</td>
                        <td>Rwanda military Hospital</td>
                        <td>12/11/2022</td>
                        <td>1/01/2023</td>
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
                              <a
                                className="dropdown-item"
                                href="edit mother.html"
                              >
                                <i className="fa fa-pencil m-r-5" /> Edit
                              </a>
                              <a
                                className="dropdown-item"
                                href="#"
                                data-toggle="modal"
                                data-target="#delete_appointment"
                              >
                                <i className="fa fa-trash-o m-r-5" /> Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
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

export default Mathers;
