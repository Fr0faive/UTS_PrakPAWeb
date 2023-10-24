import { faSquareTwitter, faSquareFacebook, faSquareGooglePlus, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="mt-24 bg-accent w-full h-full flex justify-center items-center flex-col gap-16">
      <div className="flex flex-row gap-2 mt-10">
        <a href="https://twitter.com/Aveousz_Fa"><FontAwesomeIcon icon={faSquareTwitter} style={{color: "#ffffff",}} size="2xl"/></a>
        <a href="https://www.facebook.com/FaikarMochT/"><FontAwesomeIcon icon={faSquareFacebook}  style={{color: "#ffffff",}} size="2xl"/></a>
        <a href="https://plus.google.com/+Faikar"><FontAwesomeIcon icon={faSquareGooglePlus} style={{color: "#ffffff",}} size="2xl"/></a>
        <a href="https://www.instagram.com/aileaff_/"><FontAwesomeIcon icon={faSquareInstagram} style={{color: "#ffffff",}} size="2xl"/></a>
      </div>
      <div className="mx-10 flex flex-wrap gap-16 md:gap-96 justify-start items-center text-2xl text-white mb-10">
        <div className="flex flex-col ">
            <a href="https://wa.me/+6285155064559">Contact</a>
            <a href="https://tri-svenproject.my.id/">About me</a>
            <a href="https://s.id/1VJa0">Terms & Conditions</a>
        </div>
        <div className="flex flex-col">
            <a href="https://s.id/1VJa3">Career</a>
            <a href="https://www.google.com/maps">Change Country</a>
            <a href="https://s.id/1VJa6">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;