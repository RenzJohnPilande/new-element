import "../App.css";
import { FaBars, FaX } from "react-icons/fa6";
import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AboutHoverCard,
  AboutHoverCardContent,
  AboutHoverCardTrigger,
} from "@/components/ui/about-hover-card";
import {
  BusinessHoverCard,
  BusinessHoverCardContent,
  BusinessHoverCardTrigger,
} from "@/components/ui/business-hover-card";
import {
  NavigationAccordion,
  NavigationAccordionContent,
  NavigationAccordionItem,
  NavigationAccordionTrigger,
} from "@/components/ui/navigation-accordion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <p className="text-center bg-slate-900 text-white py-3 md:py-2 m-0 text-sm">
        Welcome to New Element Inc. Mabuhay!
      </p>
      <div className="flex w-full flex-row align-center justify-between px-5 py-2 lg:px-20 bg-gradient-to-b from-black/20 to-black/10">
        <div className="brand flex w-2/3">
          <Link to="/" className="w-14 h-auto md:w-20 focus:outline-none">
            <img src="/images/ne-logo.png" alt="Brand Image" className="h-auto" />
          </Link>
          <h1 className="text-white font-bold content-center text-base uppercase mx-2">
            New Element
          </h1>
        </div>

        <div className="hidden xl:flex flex-wrap items-center justify-end xl:w-1/2 max-w-full">
          <Link
            to="/"
            className={`mx-auto uppercase outline-none hover:text-red-600 focus:text-red-600 font-bold transition-all duration-300 
            ${location.pathname === "/" ? "text-red-600" : "text-white"}`}
          >
            Home
          </Link>
          <div className="mx-auto">
            <AboutHoverCard>
              <AboutHoverCardTrigger>
                <Link
                  to="/about"
                  className={`mx-auto uppercase  outline-none hover:text-red-600 focus:text-red-600 font-bold transition-all duration-300 
            ${location.pathname.startsWith("/about") ? "text-red-600" : "text-white"}`}
                >
                  About Us
                </Link>
              </AboutHoverCardTrigger>
              <AboutHoverCardContent>
                <ul className="flex flex-wrap flex-col w-full">
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/values">Our Values</Link>
                  </li>
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/strategy">Our Strategy</Link>
                  </li>
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/history">Our History</Link>
                  </li>
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/environment">Our Business Ecological Environment</Link>
                  </li>
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/organization">Organizational Chart</Link>
                  </li>
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/csr">Corporate Social Responsibility</Link>
                  </li>
                  <li className="p-3 text-sm text-slate-950 last:border-none border-b border-gray-300 hover:text-red-600">
                    <Link to="/about/vision">Our Vision and Core Purpose</Link>
                  </li>
                </ul>
              </AboutHoverCardContent>
            </AboutHoverCard>
          </div>
          <div className="mx-auto">
            <BusinessHoverCard>
              <BusinessHoverCardTrigger>
                <Link
                  className={`mx-auto uppercase  outline-none hover:text-red-600 focus:text-red-600 font-bold transition-all duration-300 
            ${location.pathname.startsWith("/business") ? "text-red-600" : "text-white"}`}
                  to="/business"
                >
                  Our Business
                </Link>
              </BusinessHoverCardTrigger>
              <BusinessHoverCardContent>
                <div className="flex flex-wrap flex-col w-full">
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/apparel"
                  >
                    Golf Apparel and Accessories
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/equipment"
                  >
                    Golf Equipment
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/promotion"
                  >
                    Advertising and Promotion
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/event"
                  >
                    Event Coordination
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/agent"
                  >
                    Professional Athlete Agent
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/technology"
                  >
                    Golf Technology and Information
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 border-b border-gray-300 hover:text-red-600"
                    to="/business/cart"
                  >
                    Golf Cart
                  </Link>
                  <Link
                    className="p-3 text-sm text-slate-950 hover:text-red-600"
                    to="/business/tourism"
                  >
                    Golf Tourism/Traveling
                  </Link>
                </div>
              </BusinessHoverCardContent>
            </BusinessHoverCard>
          </div>

          <Link
            className={`mx-auto uppercase  outline-none hover:text-red-600 focus:text-red-600 font-bold transition-all duration-300 
            ${location.pathname === "/contacts" ? "text-red-600" : "text-white"}`}
            to="/contacts"
          >
            Contact Us
          </Link>
        </div>

        <div className="relative z-50 flex ">
          <button
            onClick={toggleMenu}
            aria-label="Mobile Navigation Open"
            className="m-2 my-auto p-2 xl:hidden border rounded border-white"
          >
            <FaBars className="text-xl text-white" />
          </button>

          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg p-4">
              <div className="flex justify-between items-center mb-8 border-b">
                <img src="/images/ne-logo.png" alt="Brand Image" className="h-12" />
                <button onClick={toggleMenu} aria-label="Mobile Navigation Close">
                  <FaX className="text-gray-600 text-xl md:text-2xl" />
                </button>
              </div>
              <div className="flex flex-col">
                <div className="pb-2">
                  <Link to="/" className="text-lg font-semibold">
                    Home
                  </Link>
                </div>
                <div className="pb-2">
                  <Link to="/about" className="text-lg font-semibold">
                    About Us
                  </Link>
                  <div className="flex flex-wrap flex-col px-1 py-2">
                    <span className="text-sm py-1">
                      <Link to="/about/values">Our Values</Link>
                    </span>
                    <span className="text-sm py-1">
                      <Link to="/about/strategy">Our Strategy</Link>
                    </span>
                    <span className="text-sm py-1">
                      <Link to="/about/history">Our History</Link>
                    </span>
                    <span className="text-sm py-1">
                      <Link to="/about/environment">Our Business Ecological Environment</Link>
                    </span>
                    <span className="text-sm py-1">
                      <Link to="/about/organization">Organizational chart</Link>
                    </span>
                    <span className="text-sm py-1">
                      <Link to="/about/csr">Corporate Social Responsibility</Link>
                    </span>
                    <span className="text-sm py-1">
                      <Link to="/about/vision">Our Vision and Core Purpose</Link>
                    </span>
                  </div>
                </div>
                <div className="pb-2">
                  <Link to="/business" className="text-lg font-semibold">
                    Our Business
                  </Link>
                  <div className="flex flex-wrap flex-col px-1 py-2">
                    <NavigationAccordion type="single" collapsible>
                      <NavigationAccordionItem value="item-1">
                        <NavigationAccordionTrigger>
                          <Link to="/business/apparel" className="text-sm py-1">
                            Golf Apparel and Accessories
                          </Link>
                        </NavigationAccordionTrigger>
                        <NavigationAccordionContent className="mx-4">
                          <Link to="http://golftimeph.com/" target="none" className="text-sm py-1">
                            Golf Time PH
                          </Link>
                        </NavigationAccordionContent>
                      </NavigationAccordionItem>
                    </NavigationAccordion>

                    <Link to="/business/equipment" className="text-sm py-1">
                      Golf Equipment
                    </Link>
                    <Link to="/business/promotion" className="text-sm py-1">
                      Advertising and Promotion
                    </Link>
                    <Link to="/business/event" className="text-sm py-1">
                      Event Coordination
                    </Link>
                    <Link to="/business/agent" className="text-sm py-1">
                      Professional Athlete Agent
                    </Link>
                    <Link to="/business/technology" className="text-sm py-1">
                      Golf Technology and Information
                    </Link>
                    <Link to="/business/cart" className="text-sm py-1">
                      Golf Cart
                    </Link>
                    <Link to="/business/tourism" className="text-sm py-1">
                      Golf Tourism/Traveling
                    </Link>
                  </div>
                </div>
                <div className="pb-2">
                  <Link to="/contacts" className="text-lg font-semibold">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
