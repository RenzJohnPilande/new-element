import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/home/Index";
import About from "./pages/about/About";
import Business from "./pages/businesses/Business";
// import Partners from "./pages/Partners";
import Contacts from "./pages/Contact";
import Organization from "./pages/about/Organization";
import Values from "./pages/about/Values";
import Strategy from "./pages/about/Strategy";
import History from "./pages/about/History";
import CSR from "./pages/about/CSR";
import Vision from "./pages/about/Vision";
import Error from "./pages/Error";
import Foundation from "./pages/about/csr/Foundation";
import Industry from "./pages/about/csr/Industry";
import Support from "./pages/about/csr/Support";
import Environment from "./pages/about/Environment";
import Apparel from "./pages/businesses/Apparel";
import Equipment from "./pages/businesses/Equipment";
import Promotion from "./pages/businesses/Promotion";
import Event from "./pages/businesses/Event";
import Agent from "./pages/businesses/Agent";
import Technology from "./pages/businesses/Technology";
import Cart from "./pages/businesses/Cart";
import Tourism from "./pages/businesses/Tourism";
import News from "./pages/News";
import Policy from "./pages/Policy";
import Privacy from "./pages/Privacy";
import Partnerships from "./pages/businesses/Uptrend";
import Uptrend from "./pages/businesses/Uptrend";
import Gtw from "./pages/businesses/Gtw";
import Mingxiu from "./pages/businesses/Mingxiu";
import Patriot from "./pages/businesses/Patriot";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/about/strategy" element={<Strategy />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/environment" element={<Environment />} />
          <Route path="/about/csr" element={<CSR />} />
          <Route path="/about/csr/foundation" element={<Foundation />} />
          <Route path="/about/csr/industry" element={<Industry />} />
          <Route path="/about/csr/support" element={<Support />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="*" element={<Error />} />
          <Route path="/about/organization" element={<Organization />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/apparel" element={<Apparel />} />
          <Route path="/business/equipment" element={<Equipment />} />
          <Route path="/business/promotion" element={<Promotion />} />
          <Route path="/business/event" element={<Event />} />
          <Route path="/business/agent" element={<Agent />} />
          <Route path="/business/technology" element={<Technology />} />
          <Route path="/business/cart" element={<Cart />} />
          <Route path="/business/tourism" element={<Tourism />} />
          <Route path="/business/uptrend" element={<Uptrend />} />
          <Route path="/business/gtw" element={<Gtw />} />
          <Route path="/business/mingxiu" element={<Mingxiu />} />
          <Route path="/business/patriot" element={<Patriot />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
          <Route path="/policies" element={<Policy />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
