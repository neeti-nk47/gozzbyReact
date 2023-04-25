import logo from "./logo3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner Banner">
      <div className="navbar">
        <nav className="navigation mt-3">
          <div className="logo">
            <a className="brand-logo" href="/">
              <img src={logo} className="brand-image" alt="logo" />
            </a>
          </div>
          <a class="professionals" href="/">
            Join As A Pro
          </a>
          <a class="customers" href="/">
            Post A Job
          </a>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-7 banner-content">
            <h1 className="heading-title mt-4">
              Find local professionals for pretty much anything.
            </h1>
            <p className="sub-heading mt-4">
              We’re picky at Goozzby and turn down over a third of professionals
              who apply to join. We evaluate each one to assess whether they
              meet our high standards, because our reputation is only as good as
              our professionals.
            </p>
            <div className="row">
              <div className="col-md-6 mt-4 selectionss">
                <select className="search-locat">
                  <option>Accountant</option>
                  <option>Air Conditioning</option>
                  <option>Aluminium doors and windows</option>
                  <option>Appliance Repairs</option>
                  <option>Welders</option>
                  <option>Window Cleaning</option>
                  <option>Wire Mesh Fencing</option>
                  <option>Wooden Decking</option>
                </select>
              </div>
              <div className="col-md-6 mt-4">
                <div className="row locationss">
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="search-locat pac-target-input"
                      placeholder="What's Your Location?"
                      name="address"
                      id="search_input"
                      autocomplete="off"
                    ></input>
                  </div>
                  <div class="col-md-2">
                    <a href="/" target="_blank">
                      <button type="button" className="btn search-btn">
                        Search
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://dashboard.goozzby.com/images/man.png?2349e63c10a5c33251038ce80088bc20"
              alt="man"
              className="man-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
