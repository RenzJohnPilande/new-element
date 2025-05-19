import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import {
  FaGlobe,
  FaHandshake,
  FaHelmetSafety,
  FaLeaf,
  FaPeopleGroup,
  FaRecycle,
  FaScaleBalanced,
  FaScaleUnbalanced,
  FaTree,
} from "react-icons/fa6";
import { Breadcrumbs } from "../../components/breadcrumbs";

function CSR() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-wrap content-center justify-center w-screen h-screen">
        <div className="container w-80">
          <TailwindSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <div className="bg-csr lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[{ name: "about us", link: "/about" }]}
          current="CSR"
        />
      </div>
      <div className="">
        <div className="container flex-grow flex flex-wrap py-5 px-3">
          <div className="flex flex-wrap w-full ">
            <div className="flex flex-wrap w-full content-start p-6 ">
              <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
                <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
                  Corporate Social Responsibility
                </h1>
                <p className="text-lg text-black" data-aos="fade-up" data-aos-delay="100">
                  Our commitment to positively impacting society and the environment.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaLeaf />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Sustainable Practices</h3>
                    <p className="text-gray-700 mb-4">
                      Implementing sustainable practices in our operations, including energy
                      efficiency, waste reduction, and water conservation.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaRecycle />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Carbon Footprint Reduction</h3>
                    <p className="text-gray-700 mb-4">
                      Setting measurable targets for reducing greenhouse gas emissions and
                      increasing the use of renewable energy sources.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaGlobe />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Sustainable Sourcing</h3>
                    <p className="text-gray-700 mb-4">
                      Sourcing raw materials from suppliers who adhere to environmental and social
                      standards.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaTree />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Eco-friendly Products</h3>
                    <p className="text-gray-700 mb-4">
                      Innovating and promoting products that are environmentally friendly and
                      sustainable.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaScaleBalanced />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Transparency</h3>
                    <p className="text-gray-700 mb-4">
                      Maintaining transparency in our financial reporting and business operations.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaScaleUnbalanced />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Ethical Conduct</h3>
                    <p className="text-gray-700 mb-4">
                      Upholding ethical conduct in all our business dealings, guided by our Code of
                      Ethics and Business Conduct.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaHelmetSafety />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Labor Practices</h3>
                    <p className="text-gray-700 mb-4">
                      Ensuring fair labor practices and safe working conditions in our operations
                      and those of our suppliers.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaPeopleGroup />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Diversity and Inclusion</h3>
                    <p className="text-gray-700 mb-4">
                      Fostering a diverse and inclusive workplace where all employees are valued and
                      given equal opportunities.
                    </p>
                  </div>
                </div>
                <div
                  className="bg-white/90 p-6 shadow-lg flex flex-col justify-between border"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div>
                    <span className="text-4xl text-gray-500">
                      <FaHandshake />
                    </span>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Partnerships</h3>
                    <p className="text-gray-700 mb-4">
                      Collaborating with various stakeholders, including NGOs, government bodies,
                      and industry groups, to address social and environmental challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CSR;
