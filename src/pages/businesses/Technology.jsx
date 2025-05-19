import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";
function Technology() {
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
      <div className="bg-[url('/images/businesses/Golf-tech.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Golf Technology"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-4xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                Golf Technology and Information
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Harnessing Innovation: Explore Golf Technology and Insights
              </h2>
            </div>
            <div
              className="flex flex-wrap justift-around bg-white border m-5 content-center items-center rounded shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap flex-col text-center content-center justify-center w-full lg:w-1/4 p-5">
                <img src="/images/environment/Sparks.jpg" className="aspect-square w-48 mx-auto" />
                <h1 className="font-bold uppercase my-2">SPARKS I&T SERVICE INC</h1>
              </div>
              <div className="flex flex-wrap w-full lg:w-3/4 bg-white rounded">
                <div className="flex flex-wrap w-full content-start p-5">
                  <p className="mt-4 text-justify">
                    Welcome to Sparks I&T Service Inc., your premier partner in technology and
                    information solutions. At Sparks I&T, we specialize in providing cutting-edge
                    technological innovations and comprehensive information services tailored to
                    meet the evolving needs of businesses and organizations. With a commitment to
                    excellence and a passion for innovation, Sparks I&T offers a wide range of
                    services designed to enhance operational efficiency, improve productivity, and
                    drive growth. Whether you're looking to implement advanced IT solutions, enhance
                    cybersecurity measures, or streamline your digital infrastructure, our
                    experienced team is here to deliver customized solutions that align with your
                    business objectives. At Sparks I&T, we understand the critical role that
                    technology and information play in today's competitive landscape. Our holistic
                    approach ensures that your organization stays ahead of the curve, leveraging the
                    latest advancements in technology to achieve sustainable success.
                  </p>
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
export default Technology;
