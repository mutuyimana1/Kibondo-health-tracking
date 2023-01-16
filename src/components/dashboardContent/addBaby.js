import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import axios from "axios";
import { Provinces, Districts, Sectors, Cells, Villages } from "rwanda";

function AddBaby() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gender, setGender] = useState("");
  const [telephone, setTelephone] = useState("");
  const [district, setDistrict] = useState("");
  const [cell, setCell] = useState("");
  const [province, setProvince] = useState("");
  const [sector, setSector] = useState("");

  const handleBabies = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      fatherName,
      motherName,
      telephone,
      district,
      gender,
      cell,
      province,
      sector
    );
    axios
      .post("http://localhost:4040/baby/create", {
        firstName,
        lastName,
        fatherName,
        motherName,
        gender,
        telephone,
        district,
        cell,
        province,
        sector,
      })
      .then((res) => {
        setFirstName("");
        setLastName("");
        setFatherName("");
        setMotherName("");
        setGender("");
        setProvince("");
        setSector("");
        setCell("");
        setDistrict("");
        setTelephone("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="page-title">Add Baby</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Father's Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Mother's Name</label>
                      <input
                        className="form-control"
                        type="text"
                        name={motherName}
                        onChange={(e) => setMotherName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Parent's contact</label>
                      <input
                        className="form-control"
                        type="text"
                        name={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Province</label>
                      {/* <input class="form-control" type="text" /> */}
                      <select
                        className="form-control"
                        name={province}
                        onChange={(e) => setProvince(e.target.value)}
                      >
                        <option value>Select</option>
                        {Provinces().map((p) => (
                          <option>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>District</label>
                      <select
                        className="form-control"
                        name={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option value>Select</option>
                        {Districts(province).map((p) => (
                          <option>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Sector</label>
                      <select
                        className="form-control"
                        name={sector}
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <option value>Select</option>
                        {district && (
                          <>
                            {Sectors(province, district).map((p) => (
                              <option>{p}</option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Cell</label>
                      <select
                        className="form-control"
                        name={cell}
                        onChange={(e) => setCell(e.target.value)}
                      >
                        <option value>Select</option>
                        {sector && (
                          <>
                            {Cells(province, district, sector).map((p) => (
                              <option>{p}</option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">Gender:</label>
                      <select
                        className="form-control"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value>female</option>
                        <option value>male</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={handleBabies}
                  >
                    ADD BABY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* TODO */}
      </div>
    </div>
  );
}

export default AddBaby;
