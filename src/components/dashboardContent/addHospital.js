import React from "react";
import Sidebar from "./sidebar";

function AddHospital() {
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
                        ID <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Name <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Province<span className="text-danger">*</span>
                      </label>
                      <select className="form-control">
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
                      <select className="form-control">
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
                      <select className="form-control">
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
                      <select className="form-control">
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
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>
                        Director<span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                </div>
                <div className="m-t-20 text-center">
                  <button className="btn btn-primary submit-btn">
                    ADD HOSPITAL
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
