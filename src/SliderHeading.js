import "./SliderHeading.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHeading = () => {
  return (
    <div className="slider-heading mt-4">
      <h3>Popular services in Your Area</h3>
      <div className="Slickslider">
        <div className="contents-wrapper">
          <div align="center">
            <div
              className="slick-slider slick-initialized"
              dir="ltr"
              style={{ marginTop: "3rem" }}
            >
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-prev"
                style={{ display: "block" }}
              >
                {" "}
                Previous
              </button>
              <div className="slick-list">
                <div
                  className="slick-track"
                  style={{
                    opacity: "1",
                    transform: "translate3d(-2470px, 0px, 0px)",
                    width: " 4199px",
                    transition: "-webkit-transform 500ms ease 0s",
                  }}
                >
                  <div
                    data-index="-3"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/back22.jpg?ec04e5b45f629ea6089073ea74d74e39"
                          alt="image1"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-2"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/plumber-fixing.jpg?b8dc171b3a65ef3a05aaeb43418791de"
                          alt="image2"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="-1"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/male-consultant.jpg?3a739b9879f05efba6d688ff0074301a"
                          alt="image3"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="0"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/handsome.jpg?11d64e44954f0c0858546c6a4c576ae0"
                          alt="image4"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="1"
                    className="slick-slide slick-active"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/mechanic.jpg?0f69d4ae639a9b08640ba7b3e2ef94d5"
                          alt="image5"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="2"
                    className="slick-slide slick-active slick-current"
                    tabindex="-1"
                    aria-hidden="false"
                    style={{ outline: "none", width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/worker.jpg?f7fec9264285531ea33500921a9aec0c"
                          alt="image6"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="3"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/back22.jpg?ec04e5b45f629ea6089073ea74d74e39"
                          alt="image7"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="4"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/plumber-fixing.jpg?b8dc171b3a65ef3a05aaeb43418791de"
                          alt="image8"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    data-index="5"
                    tabindex="-1"
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "247px" }}
                  >
                    <div>
                      <div
                        tabindex="-1"
                        style={{ width: "100%", display: "inline-block;" }}
                      >
                        <img
                          src="https://dashboard.goozzby.com/images/male-consultant.jpg?3a739b9879f05efba6d688ff0074301a"
                          alt="image9"
                          className="slick-imgs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                data-role="none"
                className="slick-arrow slick-next"
                style={{ display: "block" }}
              >
                {" "}
                Next
              </button>
              <ul className="slick-dots" style={{ display: "block" }}>
                <li className="slick-active">
                  <button>1</button>
                </li>
                <li className="">
                  <button>2</button>
                </li>
                <li className="">
                  <button>3</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHeading;
