import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

function FooterAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-semibold my-2">Navigation</AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex flex-wrap flex-col">
            <Link
              to="/"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              About Us
            </Link>
            <Link
              to="/business"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Our Business
            </Link>
            <Link
              to="/contacts"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Contact Us
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-semibold my-2">
          Company Information
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex flex-wrap flex-col">
            <Link
              to="/about/values"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Our Values
            </Link>
            <Link
              to="/about/strategy"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Our Strategy
            </Link>
            <Link
              to="/about/history"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Our History
            </Link>
            <Link
              to="/about/environment"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Our Business Ecological Environment
            </Link>
            <Link
              // to="/about/organization"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Organizational Chart
            </Link>
            <Link
              to="/about/csr"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Corporate Social Responsibility
            </Link>
            <Link
              to="/about/vision"
              className="text-xs transition-all duration-300 hover:text-red-600 leading-8"
            >
              Our Vision and Core Purpose
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-semibold my-2">
          Business and Services
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-full flex flex-wrap flex-col">
            <Link to="/business/apparel" className="text-xs hover:text-red-600 leading-8">
              Golf Apparel and Accessories
            </Link>
            <Link to="/business/equipment" className="text-xs hover:text-red-600 leading-8">
              Golf Equipment
            </Link>
            <Link to="/business/promotion" className="text-xs hover:text-red-600 leading-8">
              Advertising and Promotion
            </Link>
            <Link to="/business/event" className="text-xs hover:text-red-600 leading-8">
              Event Coordination
            </Link>
            <Link to="/business/agent" className="text-xs hover:text-red-600 leading-8">
              Professional Athlete Agent
            </Link>
            <Link to="/business/technology" className="text-xs hover:text-red-600 leading-8">
              Golf Technology and Information
            </Link>
            <Link to="/business/cart" className="text-xs hover:text-red-600 leading-8">
              Golf Cart
            </Link>
            <Link to="/business/tourism" className="text-xs hover:text-red-600 leading-8">
              Golf Tourism/Traveling
            </Link>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FooterAccordion;
