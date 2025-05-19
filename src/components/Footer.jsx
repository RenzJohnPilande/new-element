import { React, useState, useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { BsTwitterX, BsFacebook, BsInstagram, BsEnvelope, BsPhone, BsMap } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import FooterAccordion from "./FooterAccordion";
import { ArrowRight, ChevronRight } from "lucide-react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-slate-950 text-white pt-5 md:py-10">
        <div className="container mx-auto px-4">
          {!isMobile && (
            <div className="flex flex-wrap justify-between">
              <div className="w-full flex flex-wrap flex-col md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold mb-1">Navigation</h4>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/" className="hover:text-red-600 focus:text-red-600">
                    Home
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about" className="hover:text-red-600 focus:text-red-600">
                    About Us
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/business" className="hover:text-red-600 focus:text-red-600">
                    Our Business
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/contacts" className="hover:text-red-600 focus:text-red-600">
                    Contact Us
                  </Link>
                </h1>
              </div>
              <div className="w-full flex flex-wrap flex-col md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold mb-1">About Us</h4>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/values" className="hover:text-red-600 focus:text-red-600">
                    Our Values
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/strategy" className="hover:text-red-600 focus:text-red-600">
                    Our Strategy
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/history" className="hover:text-red-600 focus:text-red-600">
                    Our History
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/environment" className="hover:text-red-600 focus:text-red-600">
                    Our Business Ecological Environment
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/organization" className="hover:text-red-600 focus:text-red-600">
                    Organizational Chart
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/csr" className="hover:text-red-600 focus:text-red-600">
                    Corporate Social Responsibility
                  </Link>
                </h1>
                <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/vision" className="hover:text-red-600 focus:text-red-600">
                    Our Vision and Core Purpose
                  </Link>
                </h1>
                {/* <h1 className="text-sm transition-all duration-300 leading-8 outline-none">
                  <Link to="/about/organization" className="hover:text-red-600 focus:text-red-600">
                    Organization
                  </Link>
                </h1> */}
              </div>
              <div className="w-full flex flex-wrap flex-col md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                <h4 className="text-2xl font-bold mb-1">Our Business</h4>
                <ul>
                  <li>
                    <Link to="/business/apparel" className="text-sm leading-8 hover:text-red-600">
                      Golf Apparel and Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="/business/equipment" className="text-sm leading-8 hover:text-red-600">
                      Golf Equipment
                    </Link>
                  </li>
                  <li>
                    <Link to="/business/promotion" className="text-sm leading-8 hover:text-red-600">
                      Advertising and Promotion
                    </Link>
                  </li>
                  <li>
                    <Link to="/business/event" className="text-sm leading-8 hover:text-red-600">
                      Event Coordination
                    </Link>
                  </li>
                  <li>
                    <Link to="/business/agent" className="text-sm leading-8 hover:text-red-600">
                      Professional Athlete Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/business/technology"
                      className="text-sm leading-8 hover:text-red-600"
                    >
                      Golf Technology and Information
                    </Link>
                  </li>
                  <li>
                    <Link to="/business/cart" className="text-sm leading-8 hover:text-red-600">
                      Golf Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/business/tourism" className="text-sm leading-8 hover:text-red-600">
                      Golf Tourism/Traveling
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 mb-6 lg:mb-0">
                <h1 className="text-2xl font-bold mb-1">Contact</h1>
                <p className="text-white w-full">
                  Thank you for visiting our website! If you have any questions or inquiries, feel
                  free to reach out to us using the contact information below.
                </p>
                <div className="flex flex-wrap items-center my-1">
                  <div className="flex flex-wrap flex-col my-3 w-full">
                    <div className="flex items-center my-1">
                      <div className="text-2xl mr-3">
                        <BsEnvelope />
                      </div>
                      <p>services@phnei.com</p>
                    </div>
                    <div className="flex items-center my-1">
                      <div className="text-2xl mr-3">
                        <BsMap />
                      </div>
                      <p className="text-sm">
                        Unit 909 Avida Tower 1, Madrigal Business Park, Alabang 1770 City of
                        Muntinlupa, NCR
                      </p>
                    </div>
                    {/* <div className="flex items-center my-1">
                      <div className="text-2xl mr-3">
                        <BsPhone />
                      </div>
                      <p>028350-6666</p>
                    </div> */}
                  </div>
                  {/* <div className="flex flex-wrap my-5 w-full">
                    <Link
                      to="https://www.facebook.com/newelementinc/"
                      target="blank"
                      className="transition-all duration-300 text-white focus:text-red-600 outline-none"
                    >
                      <BsFacebook className="text-2xl mr-3" />
                    </Link>
                    <Link className="transition-all duration-300 text-white focus:text-red-600 outline-none">
                      <BsTwitterX className="text-2xl mr-3" />
                    </Link>
                    <Link className="transition-all duration-300 text-white focus:text-red-600 outline-none">
                      <BsInstagram className="text-2xl mr-3" />
                    </Link>
                  </div> */}
                </div>
                <div className="flex flex-wrap flex-col justify-center text-xs capitalize underline leading-5 underline-offset-4">
                  <Link className="mb-1 text-white hover:text-red-600 w-max" to="/news">
                    News & Updates
                  </Link>
                  <Link className="mb-1 text-white hover:text-red-600 w-max" to="/policies">
                    Company Policies
                  </Link>
                  <Link className="mb-1 text-white hover:text-red-600 w-max" to="/privacy">
                    Privacy Statement
                  </Link>
                </div>
              </div>
            </div>
          )}

          {isMobile && (
            <div className="flex flex-wrap justify-start pb-5">
              <div className="w-full my-4">
                <h4 className="text-2xl font-bold mb-1">Contact Us</h4>
                <p className="text-white w-full">
                  Thank you for visiting our website! If you have any questions or inquiries, feel
                  free to reach out to us using the contact information below.
                </p>
                <div className="flex flex-wrap items-center my-1">
                  <div className="flex flex-wrap flex-col my-3 w-full">
                    <div className="flex items-center my-2">
                      <div className="text-2xl mr-3">
                        <BsEnvelope />
                      </div>
                      <p>services@phnei.com</p>
                    </div>
                    <div className="flex items-center my-2">
                      <div className="text-2xl mr-3">
                        <BsMap />
                      </div>
                      <p className="text-sm">
                        Unit 909 Avida Tower 1, Madrigal Business Park, Alabang 1770 City of
                        Muntinlupa, NCR
                      </p>
                    </div>
                    {/* <div className="flex items-center my-2">
                      <div className="text-2xl mr-3">
                        <BsPhone />
                      </div>
                      <p>028350-6666</p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap flex-col me-4 text-sm">
                {/* <FooterAccordion /> */}
                <Link to="/news" className="capitalize my-2 border-b py-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <h1>News & Updates</h1>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </Link>
                <Link to="/policies" className="capitalize my-2 border-b py-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <h1>Company Policy</h1>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </Link>
                <Link to="/privacy" className="capitalize my-2 border-b py-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <h1>Privacy Statement</h1>
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </Link>
              </div>
              {/* <div className="w-full mt-5 text-center">
                <h1 className="text-xl font-bold uppercase">Follow Us!</h1>
                <div className="flex flex-wrap justify-center mt-2 mb-5 w-full">
                  <Link
                    to="https://www.facebook.com/newelementinc/"
                    target="blank"
                    className="transition-all duration-300 text-white hover:text-red-600"
                  >
                    <BsFacebook className="text-2xl mr-3" />
                  </Link>
                  <Link className="transition-all duration-300 text-white hover:text-red-600">
                    <BsTwitterX className="text-2xl mr-3" />
                  </Link>
                  <Link className="transition-all duration-300 text-white hover:text-red-600">
                    <BsInstagram className="text-2xl mr-3" />
                  </Link>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center border-t bg-slate-950 py-3 text-xs text-white">
        <h1>Copyright</h1>
        <FaRegCopyright className="mx-2" />
        <h1>New Element Inc. All rights reserved.</h1>
      </div>
    </>
  );
}

export default Footer;
