import React from "react";

function Blog() {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Blog Post
            </h5>
            <h1 className="display-4">Our Latest Blog Posts</h1>
          </div>
          <div className="row g-5">
            <div className="col-xl-4 col-lg-6">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src="img/konsa.jpg" alt />
                <div className="p-4">
                  <a className="h3 d-block mb-3" href="detail.html">
                    Breastfeed: The Gift of a Lifetime to Your Baby.
                  </a>
                  <p className="m-0">
                    Breast milk helps keep your baby healthy. Breast milk is
                    always ready and good for the environment.
                  </p>
                </div>
                <div className="d-flex justify-content-between border-top p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="img/SONGA.jpg"
                      width={25}
                      height={25}
                      alt
                    />
                    <small>SONGA</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="ms-3">
                      <i className="far fa-eye text-primary me-1" />
                      12345
                    </small>
                    <small className="ms-3">
                      <i className="far fa-comment text-primary me-1" />
                      123
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="bg-light rounded overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="img/carrot-juice.webp"
                  alt
                />
                <div className="p-4">
                  <a className="h3 d-block mb-3" href>
                    Carrot juice source of Vitamin A
                  </a>
                  <p className="m-0">
                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                    rebum clita rebum dolor stet amet justo
                  </p>
                </div>
                <div className="d-flex justify-content-between border-top p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="img/user.jpg"
                      width={25}
                      height={25}
                      alt
                    />
                    <small>ALICE</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="ms-3">
                      <i className="far fa-eye text-primary me-1" />
                      12345
                    </small>
                    <small className="ms-3">
                      <i className="far fa-comment text-primary me-1" />
                      123
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src="img/isukari.jpg" alt />
                <div className="p-4">
                  <a className="h3 d-block mb-3" href>
                    The poisonous effects of sugar on infants
                  </a>
                  <p className="m-0">
                    Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                    rebum clita rebum dolor stet amet justo
                  </p>
                </div>
                <div className="d-flex justify-content-between border-top p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="img/user.jpg"
                      width={25}
                      height={25}
                      alt
                    />
                    <small>EUGENE</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="ms-3">
                      <i className="far fa-eye text-primary me-1" />
                      12345
                    </small>
                    <small className="ms-3">
                      <i className="far fa-comment text-primary me-1" />
                      123
                    </small>
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

export default Blog;
