import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import { CircularProgress } from "@mui/material";
function RegisteredUsers() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchUsers = () => {
    setIsFetching(true);
    axios
      .get("http://localhost:4040/user/all")
      .then((res) => {
        setUsers(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        setIsFetching(false);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card" style={{ boxShadow: "-2px -2px" }}>
              <div className="card-header">
                <h4 className="card-title d-inline-block">Expectant users</h4>
                <a href="/users" className="btn btn-primary float-right">
                  View all
                </a>
              </div>
              <div className="card-block">
                <div className="table-responsive">
                  <table className="table mb-0 new-patient-table">
                    <tbody>
                      {isFetching ? (
                        <center
                          style={{ paddingTop: "100px", paddingLeft: "250px" }}
                        >
                          <CircularProgress />
                        </center>
                      ) : (
                        <>
                          {users.map((usa, index) => (
                            <tr>
                              <td>
                                <img
                                  width={28}
                                  height={28}
                                  className="rounded-circle"
                                  src="assets/img/user.jpg"
                                  alt
                                />
                                <h2>{usa.firstName}</h2>
                              </td>
                              <td>{usa.position}</td>
                              <td>{usa.telephone}</td>
                              <td>{usa.email}</td>
                              <td>{usa.hospitalName}</td>
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
        <div className="content"></div>
      </div>
    </div>
  );
}

export default RegisteredUsers;
