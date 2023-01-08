import React from "react";
import Sidebar from "./sidebar";

function Dashboard() {
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
                      <h3>98</h3>
                      <span className="widget-title1">System Users </span>
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
                      <h3>1072</h3>
                      <span className="widget-title2">Babies</span>
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
                      <h3>72</h3>
                      <span className="widget-title3">Expectant Mothers</span>
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
                      <h3>618</h3>
                      <span className="widget-title4">Hospitals</span>
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
                        Registerd Babies
                      </h4>
                      <a
                        href="babies.html"
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
                            <tr>
                              <td style={{ minWidth: 200 }}>
                                <a className="avatar" href="profile.html">
                                  J
                                </a>
                                <h2>
                                  <a href="profile.html">
                                    Jennifer KAMALI{" "}
                                    <span>KICUKIRO, NYARUGUNGA</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h5 className="time-title p-0">
                                  Parent's contact
                                </h5>
                                <p>0788317781</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">DOB</h5>
                                <p>3/12/2022</p>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ minWidth: 200 }}>
                                <a className="avatar" href="profile.html">
                                  J
                                </a>
                                <h2>
                                  <a href="profile.html">
                                    Jennifer KAMALI{" "}
                                    <span>KICUKIRO, NYARUGUNGA</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h5 className="time-title p-0">
                                  Parent's contact
                                </h5>
                                <p>0788317781</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">DOB</h5>
                                <p>3/12/2022</p>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ minWidth: 200 }}>
                                <a className="avatar" href="profile.html">
                                  J
                                </a>
                                <h2>
                                  <a href="profile.html">
                                    Jennifer KAMALI{" "}
                                    <span>KICUKIRO, NYARUGUNGA</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h5 className="time-title p-0">
                                  Parent's contact
                                </h5>
                                <p>0788317781</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">DOB</h5>
                                <p>3/12/2022</p>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ minWidth: 200 }}>
                                <a className="avatar" href="profile.html">
                                  J
                                </a>
                                <h2>
                                  <a href="profile.html">
                                    Jennifer KAMALI{" "}
                                    <span>KICUKIRO, NYARUGUNGA</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h5 className="time-title p-0">
                                  Parent's contact
                                </h5>
                                <p>0788317781</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">DOB</h5>
                                <p>3/12/2022</p>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ minWidth: 200 }}>
                                <a className="avatar" href="profile.html">
                                  J
                                </a>
                                <h2>
                                  <a href="profile.html">
                                    Jennifer KAMALI{" "}
                                    <span>KICUKIRO, NYARUGUNGA</span>
                                  </a>
                                </h2>
                              </td>
                              <td>
                                <h5 className="time-title p-0">
                                  Parent's contact
                                </h5>
                                <p>0788317781</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">DOB</h5>
                                <p>3/12/2022</p>
                              </td>
                            </tr>
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
                        href="mothers.html"
                        className="btn btn-primary float-right"
                      >
                        View all
                      </a>
                    </div>
                    <div className="card-block">
                      <div className="table-responsive">
                        <table className="table mb-0 new-patient-table">
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  className="rounded-circle"
                                  src="assets/img/user.jpg"
                                  alt
                                />
                                <h2>kamaliza Sandra</h2>
                              </td>
                              <td>RMH</td>
                              <td>0788303039</td>
                              <td>NYARUGUNGA</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  className="rounded-circle"
                                  src="assets/img/user.jpg"
                                  alt
                                />
                                <h2>kamaliza Sandra</h2>
                              </td>
                              <td>RMH</td>
                              <td>0788303039</td>
                              <td>NYARUGUNGA</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  className="rounded-circle"
                                  src="assets/img/user.jpg"
                                  alt
                                />
                                <h2>kamaliza Sandra</h2>
                              </td>
                              <td>RMH</td>
                              <td>0788303039</td>
                              <td>NYARUGUNGA</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  className="rounded-circle"
                                  src="assets/img/user.jpg"
                                  alt
                                />
                                <h2>kamaliza Sandra</h2>
                              </td>
                              <td>RMH</td>
                              <td>0788303039</td>
                              <td>NYARUGUNGA</td>
                            </tr>
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
