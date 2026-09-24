const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light py-4">
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h5>SkillBridge</h5>
            <p>Here to help you find a job</p>
          </div>

          <div className="col-md-3">
            <h5>Product</h5>
            <p>Browse jobs</p>
            <p>Remote jobs</p>
            <p>Startup jobs</p>
          </div>

          <div className="col-md-3">
            <h5>Resource</h5>
            <p>FAQ</p>
            <p>Support</p>
            <p>Privacy</p>
          </div>

          <div className="col-md-3">
            <h5>Company</h5>
            <p>About</p>
            <p>Contact</p>
            <p>Career</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;