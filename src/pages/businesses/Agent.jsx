import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";
function Agent() {
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
      <div className="bg-[url('/images/businesses/Professional-Athlete-agent.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Professional Athlete Agent"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-4xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                Professional Athlete Agent
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Navigating Success: Your Strategic Partner in Golf Athlete Representation
              </h2>
            </div>
            <div
              className="flex flex-wrap justift-around bg-white border m-5 content-center items-center rounded shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex flex-wrap flex-col text-center content-center justify-center w-full lg:w-1/4 p-5">
                <img
                  src="/images/environment/La-Plata.jpg"
                  className="aspect-square w-48 mx-auto"
                />
                <h1 className="font-bold uppercase my-2">LA PLATA</h1>
              </div>
              <div className="flex flex-wrap w-full lg:w-3/4 bg-white rounded">
                <div className="flex flex-wrap w-full content-start p-5">
                  <p className="mt-4 text-justify">
                    Welcome to La Plata, your premier professional golfer agency. At La Plata, we
                    specialize in representing and managing the careers of elite golfers worldwide.
                    Our agency is dedicated to providing personalized and strategic management
                    services that cater to the unique needs of professional golfers. With a deep
                    understanding of the golfing industry and a commitment to excellence, La Plata
                    offers comprehensive representation aimed at maximizing your potential both on
                    and off the course. Whether you're seeking sponsorship opportunities, tournament
                    placements, or strategic career guidance, our experienced team is here to
                    support you every step of the way. At La Plata, we pride ourselves on fostering
                    strong relationships with our clients and delivering results-driven solutions
                    that align with your career goals. Trust La Plata to elevate your professional
                    journey in the world of golf with our unwavering dedication to professionalism
                    and success.
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
export default Agent;
