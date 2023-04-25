import Banner from "./Banner";
import SliderHeading from "./SliderHeading";
import ServiceWorking from "./ServiceWorking";
import "bootstrap/dist/css/bootstrap.min.css";
import MobileApp from "./MobileApp";
import ServicesPros from "./ServicesPros";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Banner />
      <SliderHeading />
      <ServiceWorking />
      <MobileApp />
      <ServicesPros />
      <Footer />
    </>
  );
}

export default App;
