import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";

function Values() {
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
      <div className="bg-values lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs
          home="home"
          previousPages={[{ name: "about us", link: "/about" }]}
          current="our values"
        />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center">
            <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
              Core Values
            </h1>
            <p className="text-lg text-black" data-aos="fade-up" data-aos-delay="100">
              Our guiding principles that shape our culture and drive our success
            </p>
          </div>
          <div
            className="flex flex-wrap w-full content-start border bg-white p-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap w-full md:p-8 text-justify text-pretty">
              <div className="w-full lg:px-2">
                <span className="text-xl font-bold">Integrity</span>
                <p className="leading-9 text-pretty">
                  Integrity is the foundation of our business. We conduct our operations with
                  honesty and transparency, ensuring that our actions are always aligned with our
                  words. This commitment to ethical behavior builds trust with our customers,
                  partners, and employees.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap w-full content-start border bg-white p-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap w-full md:p-8 text-justify text-pretty">
              <div className="w-full lg:px-2">
                <span className="text-xl font-bold">Excellence</span>
                <p className="leading-9 text-pretty">
                  We pursue excellence in all aspects of our business. Our commitment to high
                  standards ensures that we consistently deliver top-quality products and services.
                  Through continuous improvement and attention to detail, we aim to achieve
                  outstanding results in every project.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap w-full content-start border bg-white p-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap w-full md:p-8 text-justify text-pretty">
              <div className="w-full lg:px-2">
                <span className="text-xl font-bold">Innovation</span>
                <p className="leading-9 text-pretty">
                  Innovation drives us to continuously improve and stay ahead in our industry. We
                  foster a culture where creativity and forward-thinking are encouraged, allowing us
                  to develop cutting-edge solutions. By embracing change and seeking new ideas, we
                  deliver exceptional value to our stakeholders.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap w-full content-start border bg-white p-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap w-full md:p-8 text-justify text-pretty">
              <div className="w-full lg:px-2">
                <span className="text-xl font-bold">Sustainability</span>
                <p className="leading-9 text-pretty">
                  Sustainability drives us to uphold environmentally and socially responsible
                  practices. We foster a culture where sustainability is prioritized, enabling us to
                  minimize our environmental impact and support community well-being. By embracing
                  sustainable practices and continuous improvement, we deliver lasting value to our
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap w-full content-start border bg-white p-6 mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-wrap w-full md:p-8 text-justify text-pretty">
              <div className="w-full lg:px-2">
                <span className="text-xl font-bold">Collaboration</span>
                <p className="leading-9 text-pretty">
                  Collaboration is key to our success. We believe that teamwork and open
                  communication lead to better outcomes. By working together and leveraging diverse
                  perspectives, we create a supportive and innovative work environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Values;
