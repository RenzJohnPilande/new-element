import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";

function News() {
  const [isLoading, setIsLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("/data/news.json")
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
      <div className="bg-[url('/images/background/news.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="News and Updates" />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full content-start">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center ">
              <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
                News and Updates
              </h1>
              <p className="text-base text-black" data-aos="fade-up">
                Stay informed with our latest announcements, stories, and developments
              </p>
            </div>
            <div
              className="flex flex-wrap w-full md:px-10 text-pretty border bg-white p-6 shadow-lg"
              data-aos="fade-up"
            >
              {newsList.map((news, index) => (
                <div className="flex flex-wrap justify-center w-full p-2" key={index}>
                  <div className="w-full lg:w-1/3 p-1">
                    <img src={news.image} alt={news.title} className="w-full" />
                  </div>
                  <div className="w-full lg:w-2/3 p-1">
                    <h1 className="text-lg font-bold text-pretty line-clamp-2">{news.title}</h1>
                    <span className="text-xs">{news.date}</span>
                    <h2 className="text-sm text-pretty text-justify">{news.content}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default News;
