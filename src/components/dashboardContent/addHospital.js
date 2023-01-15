import axios from "axios";
import React, { useState } from "react";
import Sidebar from "./sidebar";

function AddHospital() {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [cell, setCell] = useState("");
  const [province, setProvince] = useState("");
  const [sector, setSector] = useState("");
  const [director, setDirector] = useState("");
  const [hotline, setHotline] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdHospital = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log(name, district, cell, province, sector, director, hotline);
    axios
      .post("http://localhost:4040/hospital/register", {
        name,
        district,
        cell,
        province,
        sector,
        director,
        hotline,
      })
      .then((res) => {
        setName("");
        setDistrict("");
        setCell("");
        setProvince("");
        setSector("");
        setDirector("");
        setHotline("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h4 className="page-title">Add Hospital</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">Kigali city</option>
                        <option value="Western Province">
                          Western Province
                        </option>
                        <option value="Eastern Province">
                          Eastern Province
                        </option>
                        <option value="southern Province">
                          southern Province
                        </option>
                        <option value="Nothern Province">
                          Nothern Province
                        </option>
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
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">option 1</option>
                        <option value="Western Province">option 2</option>
                        <option value="Eastern Province">option 3</option>
                        <option value="southern Province">option 4</option>
                        <option value="Nothern Province">option 5</option>
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
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">option 1</option>
                        <option value="Western Province">option 2</option>
                        <option value="Eastern Province">option 3</option>
                        <option value="southern Province">option 4</option>
                        <option value="Nothern Province">option 5</option>
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
                        value={cell}
                        onChange={(e) => setCell(e.target.value)}
                      >
                        <option value>Select</option>
                        <option value="Kigali city">option 1</option>
                        <option value="Western Province">option 2</option>
                        <option value="Eastern Province">option 3</option>
                        <option value="southern Province">option 4</option>
                        <option value="Nothern Province">option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Hotline<span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={hotline}
                        onChange={(e) => setHotline(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Director<span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={handleAdHospital}
                  >
                    {isLoading ? "saving..." : "ADD HOSPITAL"}
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

export default AddHospital;
