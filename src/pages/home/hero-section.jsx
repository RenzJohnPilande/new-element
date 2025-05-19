import { ActionButton } from "@/components/CTAButton";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div
      id="jumbotron"
      className="text-center w-full px-5 lg:px-20 py-20 md:py-40 xl:py-80  md:flex md:text-start md:flex-wrap md:justify-center lg:justify-between min-h-screen md:min-h-full "
    >
      <div className="md:w-2/5 lg:w-4/10 xl:w-5/12 flex justify-center flex-wrap md:order-2 order-1 md:content-center pb-20">
        <img
          className="object-contain w-full h-full aspect-square rounded-lg max-w-[200px]"
          src="/images/ne-logo.png"
          alt="image description"
          data-aos="fade-up"
        />
      </div>
      <div className="w-full md:w-3/5 lg:w-4/10 xl:w-5/12 flex justify-start flex-wrap md:px-5 lg:px-5 md:order-1 order-2">
        <span
          className="w-full text-4xl font-bold pb-10 text-white md:max-w-4/6 lg:max-w-4/10 xl:max-w-5/12 order-3 text-shadow"
          data-aos="fade-up"
        >
          Discover New Element Inc. : Unveiling Our Brand
        </span>
        <p
          className="w-full text-white text-lg pb-5 md:max-w-4/6 lg:max-w-4/10 xl:max-w-5/12 order-4 text-shadow"
          data-aos="fade-up"
        >
          Explore the heart of New Element Inc. Discover our values, strategy, and history, along
          with our commitment to corporate social responsibility. Dive into our vision and core
          purpose, and navigate our organizational chart. Explore our diverse businesses, from golf
          apparel to IT & big data solutions. Uncover the essence of our brand.
        </p>
        <div className="order-5 w-full">
          <ActionButton label="Learn More" toAction="/about" style="" />
        </div>
      </div>
    </div>
  );
};
