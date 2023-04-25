import "./MobileApp.css";

const MobileApp = () => {
  return (
    <div className="app-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-wrapper">
              <img
                src="https://dashboard.goozzby.com/images/Phone.png?05c365efa9521154a37241ebd8d0ece0"
                alt="imagemobile"
                className="mobile-app animated"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="subheading mt-4">
              <h2>
                When you need to hire someone – a landscaper, a DJ, anyone –
                Goozzby finds them for you for free.
              </h2>
            </div>
            <div className="subheading  mt-4">
              <p>
                See price estimates, read reviews and chat with pros, all in the
                app.
              </p>
            </div>
            <div className="row  mt-4">
              <div className="col-md-4">
                <div className="img-wrapper apps">
                  <a href="/">
                    <img
                      src="https://dashboard.goozzby.com/images/app-store.png?04d3e5abc91616652cb044492d419fd3"
                      alt="imageApp"
                      className="app-store"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="img-wrapper apps">
                  <a href="/">
                    <img
                      src="https://dashboard.goozzby.com/images/google-play.png?39da876d1de16ff6336a70e794051fc3"
                      alt="imagePlay"
                      className="google-play"
                    />
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

export default MobileApp;
