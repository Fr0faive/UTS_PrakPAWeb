import Navbar from "../component/Navbar";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Hero from "../layout/Hero";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Content />
      <Footer/>
    </div>
  );
};

export default LandingPage;
