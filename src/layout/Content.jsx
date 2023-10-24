import { Button, ButtonSubmit } from "../component/Button";
import { Checkbox } from "../component/Checkbox";
import Dropdown from "../component/Dropdown";
import Input from "../component/Input";
import Textarea from "../component/Textarea";

const Content = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white">
      <div className="flex flex-wrap justify-center items-center gap-16 my-8 lg:my-16">
        <div className="flex flex-col gap-4 justify-center items-center text-black text-center">
          <img
            src="./assets/keyboard-solid.svg"
            alt="keyboard-solid"
            className="h-24 w-24"
          />
          <h1 className="text-2xl font-semibold">Easy to implement</h1>
          <p className="text-xl">
            Easy to implement in your company with powerful platform
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-black text-center">
          <img
            src="./assets/paper-plane-solid.svg"
            alt="paper-plane"
            className="h-24 w-24"
          />
          <h1 className="text-2xl font-semibold">Optimize Systems</h1>
          <p className="text-xl">more than 1000 company using this product</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-40 -mx-28 my-10 lg:my-16">
        <img src="./assets/content.jpg" className="h-96" />
        <div className="flex flex-col gap-8 text-black -mx-20 w-1/2">
          <h1 className="text-5xl font-bold">Now, Set up and grow your company</h1>
          <p>
            We offer many product that optimize your company, setup now and grow
            up your business
          </p>
          <Button href="https://www.facebook.com" children="Demo" />
        </div>
      </div>
      <div className="w-1/2 flex justify-around items-center h-full">
        <div className="mx-0 md:mx-20">
          <form action="submit" method="post" className="form-control">
            <div className="flex flex-wrap justify-start md:justify-between items-center gap-1 2xl:gap-7">
              <Input children="Name" type="text" placeholder="Name" />
              <Input
                children="Email"
                type="email"
                placeholder="email@mail.com"
              />
              <Dropdown />
              <Textarea />
              <div className="form-control w-full mx-0 md:mx-9 my-4 text-gray-900">
                <span className="my-4 tracking-wide text-gray-700 font-bold mb-2 text-2xl">I choose to send information about:</span>
                <Checkbox children="Marketing" />
                <Checkbox children="News & Updates" />
                <Checkbox children="Product Updates" />
                <Checkbox children="None" />
              </div>
              <ButtonSubmit/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
