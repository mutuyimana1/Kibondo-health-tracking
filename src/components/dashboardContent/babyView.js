import React from "react";
import Sidebar from "./sidebar";

function BabyView() {
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Babies</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <a
                href="add baby.html"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus" /> Add Baby
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-border table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Date of Birth</th>
                      <th>Gender</th>
                      <th>father's Name</th>
                      <th>Mother's Name</th>
                      <th>Province</th>
                      <th>District</th>
                      <th>Sector</th>
                      <th>Cell</th>
                      <th>Prent's contact</th>
                      <th>Vaccination date</th>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jennifer KAMALI</td>
                      <td>3/12/2020</td>
                      <td>Female</td>
                      <td>KAMALI Claude</td>
                      <td>MUKAMANZI Ange</td>
                      <td>Kigali</td>
                      <td>Kicukiro</td>
                      <td>Nyarugunga</td>
                      <td>Nonko</td>
                      <td>0788317781</td>
                      <td>1/02/2023</td>
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
                            <a className="dropdown-item" href="edit baby.html">
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_patient"
                            >
                              <i className="fa fa-trash-o m-r-5" /> Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Jennifer KAMALI</td>
                      <td>3/12/2020</td>
                      <td>Female</td>
                      <td>KAMALI Claude</td>
                      <td>MUKAMANZI Ange</td>
                      <td>Kigali</td>
                      <td>Kicukiro</td>
                      <td>Nyarugunga</td>
                      <td>Nonko</td>
                      <td>0788317781</td>
                      <td>1/02/2023</td>
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
                            <a className="dropdown-item" href="edit baby.html">
                              <i className="fa fa-pencil m-r-5" /> Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="#"
                              data-toggle="modal"
                              data-target="#delete_patient"
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
    </div>
  );
}

export default BabyView;
