import React from "react";
import Header from "./header";

function BmiResult() {
  return (
    <div>
      <Header />
      <div>
        {/* Health track start*/}
        <div className="container-fluid bg-primary my-5 py-5">
          <div className="container py-5">
            <div className="row gx-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="mb-4">
                  <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                    BMI calculator Results
                  </h5>
                  <h5 className="d-inline-block text-black text-center">
                    The results are generated based on the information you
                    provided
                  </h5>
                </div>
                <p className="text-white mb-5">
                  {/*FIXME FIXME TODO TODO TODO*/}
                  Based on the height and weight entered, the BMI is
                  <b className="text-secondary">0.5</b>, placing placing the
                  BMI-for-age at less than the 1st percentile for 3 year-old
                  boys. This falls in the Underweight BMI category. BMI is a
                  screening measure and is not intended to diagnose disease or
                  illness.
                </p>
                {/*FIXME FIXME TODO TODO TODO*/}
                <img
                  className="img-fluid w-100"
                  style={{ borderRadius: 10 }}
                  src="img/BMI .png"
                  alt
                />
                <br />
                <br />
                <br />
                <p className="text-white mb-5">
                  BMI-for-age percentile is an estimate of how a child’s weight
                  compares to that of other children of the same age and sex.
                  <br />
                  This BMI calculator is not intended to be a substitute for
                  professional medical advice. Discuss your BMI category with
                  your healthcare provider as BMI may relate to your overall
                  health and well-being. Your healthcare provider might
                  determine possible reasons for underweight and recommend
                  support or treatment.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="bg-white text-center rounded p-5">
                  <h1 className="mb-4">INFORMATION ENTERED</h1>
                  <table>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                  th {\n                    background-color: #2596be;\n                    color: white;\n                    padding-left: 15px;\n                    border-bottom: 1px solid #ddd;\n                  }\n                  tr {\n                    background-color: azure;\n                    font-size: larger;\n                  }\n                  td {\n                    height: 70px;\n                  }\n                ",
                      }}
                    />
                    <tbody>
                      <tr>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Weight (in kilograms)</th>
                        <th>height (in centimeters)</th>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Boy</td>
                        <td>10</td>
                        <td>80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* health track End */}
        {/* footer start*/}
        <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  ©{" "}
                  <a className="text-primary" href="#">
                    Ikibondo.com
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
      </div>
    </div>
  );
}

export default BmiResult;
