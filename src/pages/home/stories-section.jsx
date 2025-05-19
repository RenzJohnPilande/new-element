import { FaChevronRight } from "react-icons/fa6";
import {
  FIRST_STORY as Foundation,
  SECOND_STORY as Industry,
  THIRD_STORY as Support,
} from "@/constants/landingPage";
import { Link } from "react-router-dom";

export const StoriesSection = () => {
  return (
    <div id="stories" className="bg-gray-100 py-12">
      <h1 data-aos="fade-up" className="text-3xl font-bold text-center mb-8">
        Discover Our Story
      </h1>
      <div data-aos="fade-up" className="flex flex-wrap justify-center md:p-10">
        <div className="w-full md:w-1/2 lg:w-1/3 px-5 py-4 md:px-10 md:py-8 order-1">
          <div className="flex flex-wrap flex-col content-center justify-center border w-full h-auto card-shadow-right">
            <img src="/images/csr/young-futures.jpg" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-5 py-4 md:px-10 md:py-8 order-2">
          <div className="flex flex-wrap content-center justify-start items-center w-full h-full">
            <span className="text-2xl font-bold mb-2">{Foundation.title}</span>
            <p className="text-justify text-base md:text-lg font-medium text-black">
              {Foundation.paragraph}
            </p>
            <div className="flex w-full justify-end">
              <Link
                to={Foundation.link}
                className="flex flex-wrap justify-end items-center  my-3 font-semibold text-sm hover:text-base transition-all ease-in-out duration-500 font-bold"
              >
                <span className="px-1 leading-6 text-red-600">Learn More</span>
                <FaChevronRight className="text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-wrap justify-center md:p-10">
        <div className="w-full md:w-1/2 lg:w-1/3 px-5 py-4 md:px-10 md:py-8  order-1 md:order-2">
          <div className="flex flex-wrap flex-col content-center justify-center border w-full h-auto card-shadow-left">
            <img src="/images/csr/golf-industry.jpg" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-5 py-4 md:px-10 md:py-8 order-2 md:order-1">
          <div className="flex flex-wrap content-center justify-start items-center w-full h-full">
            <span className="text-2xl font-bold mb-2">{Industry.title}</span>
            <p className="text-justify text-base md:text-lg font-medium text-black">
              {Industry.paragraph}
            </p>
            <div className="flex w-full justify-end">
              <Link
                to={Industry.link}
                className="flex flex-wrap justify-end items-center  my-3 font-semibold text-sm hover:text-base transition-all ease-in-out duration-500 font-bold"
              >
                <span className="px-1 leading-6 text-red-600">Learn More</span>
                <FaChevronRight className="text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-wrap justify-center md:p-10">
        <div className="w-full md:w-1/2 lg:w-1/3 px-5 py-4 md:px-10 md:py-8  order-1">
          <div className="flex flex-wrap flex-col content-center justify-center border w-full h-auto card-shadow-right">
            <img src="/images/csr/supporting-community.jpg" className="w-full h-64 object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-5 py-4 md:px-10 md:py-8 order-2">
          <div className="flex flex-wrap content-center justify-start items-center w-full h-full">
            <h1 className="text-2xl font-bold mb-2">{Support.title}</h1>
            <p className="text-justify text-base md:text-lg font-medium text-black">
              {Support.paragraph}
            </p>
            <div className="flex w-full justify-end">
              <Link
                to={Support.link}
                className="flex flex-wrap justify-end items-center  my-3 font-semibold text-sm hover:text-base transition-all ease-in-out duration-500 font-bold"
              >
                <span className="px-1 leading-6 text-red-600">Learn More</span>
                <FaChevronRight className="text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
