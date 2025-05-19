import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";
function Event() {
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
      <div className="bg-[url('/images/businesses/Event-coordination.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="bg-white">
        <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
          <Breadcrumbs
            home="home"
            previousPages={[{ name: "our business", link: "/business" }]}
            current="Event Coordination"
          />
        </div>
        <div className="container flex-grow flex flex-wrap py-20 px-3">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-5">
              <h1
                className="text-center text-4xl font-bold uppercase text-black"
                data-aos="fade-up"
              >
                Event Coordination
              </h1>
              <h2
                className="text-center text-sm font-bold text-zinc-500"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Seamless Execution, Memorable Events: Our Expert Event Coordination Services
              </h2>
            </div>
            <div className="flex flex-wrap w-full my-4 bg-white rounded">
              <div className="flex flex-wrap w-full content-start p-5">
                <p
                  className="text-base xl:text-lg mt-4 text-justify"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Trust our experienced event coordination team to bring your vision to life and
                  create unforgettable experiences. Whether you're organizing a corporate golf
                  event, tournament, or outing, we meticulously manage every detail with precision
                  and dedication. From selecting the perfect venue to coordinating logistics and
                  ensuring flawless execution, our goal is to deliver seamless events that leave a
                  lasting impression on participants and guests alike.
                </p>
                <p
                  className="text-base xl:text-lg mt-4 text-justify"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  With a focus on excellence and attention to detail, we specialize in crafting
                  unique event experiences tailored to meet your specific needs and objectives.
                  Whether it's enhancing team morale through a golf outing or hosting a prestigious
                  tournament, our team is committed to surpassing expectations and creating
                  memorable moments. Partner with us to elevate your next golf event and ensure its
                  success from planning to completion.
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
export default Event;
