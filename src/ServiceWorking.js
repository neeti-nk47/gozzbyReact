import icon1 from "./icons/imgg1.png";
import icon2 from "./icons/imgg2.png";
import icon3 from "./icons/imgg3.png";
import "./ServiceWorking.css";

const ServiceWorking = () => {
  return (
    <div className="container">
      <div className="services-heading">
        <h1>How Our Services Work</h1>
      </div>
      <div className="services-subheading">
        <h3>3 Steps To Booking A Goozzby Pro</h3>
      </div>
      <div className="" id="status-buttons">
        <div className="row">
          <div className="col-md-4">
            <div className="style-color">
              <div className="image-wrapper">
                <img src={icon1} alt="image12" className="icon-img" />
              </div>
            </div>
            <div className="content-heading">
              <h3>Tell us what you need</h3>
            </div>
            <div className="service-content">
              <p>
                We’ll help you find a Goozzby Professional. Help us refine your
                search by telling us your requirements and we’ll contact service
                providers in your area to help you.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="style-color">
              <div className="image-wrapper">
                <img src={icon2} alt="image2222" className="icon-img" />
              </div>
            </div>
            <div className="content-heading">
              <h3>Receive Free Quotes</h3>
            </div>
            <div className="service-content">
              <p>
                You’ll receive free quotes from professionals and get quick
                notifications via our website or app. We make sure we do the leg
                work for you!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="style-color">
              <div className="image-wrapper">
                <img src={icon3} alt="image222" className="icon-img" />
              </div>
            </div>
            <div className="content-heading">
              <h3>Choose your Goozzby Pro</h3>
            </div>
            <div className="service-content">
              <p>
                Pick from some of the best providers in your area. With easy
                access to reviews and direct contact with Goozzby Pro, you can
                be confident with your choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWorking;
