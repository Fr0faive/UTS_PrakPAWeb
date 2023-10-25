import Navbar from "../component/Navbar";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Hero from "../layout/Hero";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="overflow-x-hidden">
      <Hero />
      <Content />
      <Footer/>
      </div>
    </div>
  );
};

export default LandingPage;
