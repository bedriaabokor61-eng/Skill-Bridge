const Herosection = () => {
  return (
    <div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4 ">
              Shiping your <br /> Future with the best <br /> recruiment
            </h1>
            <p className="f-5 text-muted">
              Grown and success go and hand in hand we will hep you with it{" "}
              <br />
              focus on getting job
            </p>
            <form>
              <div
                className="input-group input-group-sm "
                style={{ width: "50" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary">Get notification</button>
              </div>
            </form>
            <div className="d-flex">
              <h6 className="me-3">
                <i className="bi bi-check-circle-fill"></i> Get
              </h6>

              <h6>
                <i className="bi bi-check-circle-fill"></i> Started
              </h6>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="/images/team.jpg"
              alt="Team"
              className="w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
