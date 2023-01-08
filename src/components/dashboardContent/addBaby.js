import React, { useEffect } from "react";
import Sidebar from "./sidebar";
import { Districts } from "rwanda";

function AddBaby() {
  useEffect(() => {
    console.log(Districts());
  }, []);
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
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Father's Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Mother's Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Parent's contact <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Province <span className="text-danger">*</span>
                      </label>
                      {/* <input class="form-control" type="text" /> */}
                      <select className="form-control">
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
                      <select className="form-control">
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
                      <select className="form-control">
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
                      <select className="form-control">
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
                        parent's contact <span className="text-danger">*</span>
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="078......."
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Date of Birth <span className="text-danger">*</span>
                      </label>
                      <div className="cal-icon">
                        <input
                          type="text"
                          className="form-control datetimepicker"
                        />
                      </div>
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
                            name="gender"
                            className="form-check-input"
                          />
                          Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <label className="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            className="form-check-input"
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">
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
