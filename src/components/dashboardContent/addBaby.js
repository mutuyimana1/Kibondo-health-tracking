import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Districts } from "rwanda";
import axios from "axios";

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
                      <label>
                        First Name <span className="text-danger">*</span>
                      </label>
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
                      <label>
                        Last Name <span className="text-danger">*</span>
                      </label>
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
                      <label>
                        Father's Name <span className="text-danger">*</span>
                      </label>
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
                      <label>
                        Mother's Name <span className="text-danger">*</span>
                      </label>
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
                      <label>
                        Parent's contact <span className="text-danger">*</span>
                      </label>
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
                      <label>
                        Province <span className="text-danger">*</span>
                      </label>
                      {/* <input class="form-control" type="text" /> */}
                      <select
                        className="form-control"
                        name={province}
                        onChange={(e) => setProvince(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">Kigali</option>
                        <option value="Western Province">
                          Western province
                        </option>
                        <option value="Eastern Province">
                          Eastern Province
                        </option>
                        <option value="southern Province">
                          Southern Province
                        </option>
                        <option value="Nothern Province">
                          Nothern province
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        District <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        name={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">option1</option>
                        <option value="Western Province">option1</option>
                        <option value="Eastern Province">option1</option>
                        <option value="southern Province">option1</option>
                        <option value="Nothern Province">option1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Sector <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        name={sector}
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">option1</option>
                        <option value="Western Province">option1</option>
                        <option value="Eastern Province">option1</option>
                        <option value="southern Province">option1</option>
                        <option value="Nothern Province">option1</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Cell <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        name={cell}
                        onChange={(e) => setCell(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">option1</option>
                        <option value="Western Province">option1</option>
                        <option value="Eastern Province">option1</option>
                        <option value="southern Province">option1</option>
                        <option value="Nothern Province">option1</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group gender-select">
                      <label className="gen-label">
                        Gender:<span className="text-danger">*</span>
                      </label>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-check-input"
                          />
                          Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-check-input"
                          />
                          Female
                        </label>
                      </div>
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
