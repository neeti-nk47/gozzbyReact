import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://dashboard.goozzby.com/images/logo.png?8229a58da2991059e49c70ff0a8ab732"
                alt="logo"
                style={{ width: "19%" }}
              />
              <div className="contentss mt-4">
                <p>
                  South Africa’s number one online marketplace for residential
                  and commercial services.
                </p>
                <p>
                  <i className="fa fa-map-marker mr-4" aria-hidden="true"></i>
                  <span>10 Vlottenberg Street, Equestria 0184</span>
                </p>
                <p>
                  <i className="fas fa-phone mr-3 fa-rotate-90 phone"></i>
                  <span style={{ color: " rgb(255, 255, 255)" }}>
                    (+27)71 648 6378
                  </span>
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="font-weight-bold">Get To Know Us</h4>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> About Goozzby</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Why Goozzby?</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Pro's near me</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Pricing</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Contact Us</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Hiring Advice</span>
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="font-weight-bold">Useful Links</h4>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> How it works</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Join as a Pro</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Create a job</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Terms and Conditions</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Privacy Policy</span>
                </a>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-chevron-right"></i>
                <a href="/">
                  <span className="site-menu"> Blogs</span>
                </a>
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="font-weight-bold">Download The App</h4>
              <p>Win local jobs and grow your business</p>
              <p>
                <i aria-hidden="true" className="fab fa-apple"></i>
                <span style={{ marginLeft: "10px" }}>App Store</span>
                <i
                  aria-hidden="true"
                  className="fab fa-google-play"
                  style={{ marginLeft: "10px" }}
                ></i>
                <span style={{ marginLeft: "10px" }}>Play Store</span>
              </p>
              <p>
                <i aria-hidden="true" className="fas fa-clock"></i>
                <span style={{ marginLeft: "10px" }}>
                  Available 24 /7 to answer your queries
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start align-items-center">
                  <p className="copyright">
                    Copyright © 2022 Goozzby Pty Ltd. All rights reserved.
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <a href="/">
                    <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x facebook"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-twitter fa-lg mr-md-5 mr-3 fa-2x twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram fa-lg mr-md-5 mr-3 fa-2x instagram"></i>
                  </a>
                  <a href="/">
                    <i className="fab fa-youtube fa-lg mr-md-5 mr-3 fa-2x youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
