import { Button } from "../component/Button";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse h-screen bg-white w-full mb-0 lg:mb-10">
      <div className="bg-hero bg-cover h-[456px] lg:h-screen lg:w-1/2"></div>
      <div className="bg-white lg:w-1/2 flex justify-center items-center my-6 lg:h-screen">
        <div className="mx-20">
          <h1 className="text-6xl font-bold text-black mb-2">
            Bring technology is in your hands
          </h1>
          <p className="py-6 text-black text-justify text-4xl mb-2">
            This technology will bring new things and experiences to your
            business and company
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-normal items-center gap-4 md:gap-11">
            <Button href="https://www.tokopedia.com" children="BUY"/>
            <a href="https://s.id/1VJ8m" className="text-black text-lg underline underline-offset-8">
              See all products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
