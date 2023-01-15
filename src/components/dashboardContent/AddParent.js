import React, { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import { Provinces, Districts, Sectors, Cells, Villages } from "rwanda";

function AddParent() {
  const [firstName, setFirstName] = useState("");
  const [registerDate, setRegisteredDate] = useState("");
  const [age, setAge] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [telephone, setTelephone] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [hospital, setHospital] = useState("");

  const handleParents = (e) => {
    console.log(
      firstName,
      nationalId,
      age,
      telephone,
      province,
      district,
      sector,
      cell,
      hospital
    );

    e.preventDefault();
    axios
      .post("http://localhost:4040/parent/create", {
        firstName,
        nationalId,
        age,
        district,
        cell,
        province,
        sector,
        telephone,
        hospital,
      })
      .then((res) => {
        setFirstName("");
        setDistrict("");
        setAge("");
        setCell("");
        setProvince("");
        setSector("");
        setNationalId("");
        setTelephone("");
        setHospital("");

        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  };

  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="page-title">Add Mother</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Full Name <span className="text-danger">*</span>
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
                        Age <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Hospital <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={hospital}
                        onChange={(e) => setHospital(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        National ID <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Province<span className="text-danger">*</span>
                      </label>
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
                      {/* <input class="form-control" type="text" /> */}
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
                        {Districts(province).map((p) => (
                          <option>{p}</option>
                        ))}
                      </select>
                      {/* <input class="form-control" type="text" /> */}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Sector<span className="text-danger">*</span>
                      </label>
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
                      {/* <input class="form-control" type="text" /> */}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Cell<span className="text-danger">*</span>
                      </label>
                      {/* <input class="form-control" type="text" /> */}
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
                    <div className="form-group">
                      <label>
                        Phone number <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* TODO TODO TODO TODO */}
                  {/*FIXME FIXME FIXME FIXME */}
                </div>
              </form>
            </div>
          </div>
          <div className="m-t-20 text-center">
            <button
              className="btn btn-primary submit-btn"
              onClick={handleParents}
            >
              ADD MOTHER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddParent;
