import { Link } from "react-router-dom";
import { BLOG_ITEMS as News } from "@/constants/landingPage";

export const BlogSection = () => {
  return (
    <div className="flex flex-wrap w-full bg-gray-100 h-max min-h-screen ">
      <div className="flex flex-wrap md:container justify-center content-center items-center">
        <div className="w-full lg:w-1/2 p-5" data-aos="fade-up">
          <img
            className="w-full h-auto rounded"
            src="/images/news/2024-Hengdian-International-Golf.jpeg"
            alt="News Image"
          />
        </div>
        <div className="w-full lg:w-1/2 p-5" data-aos="fade-up">
          <h1 className="text-2xl text-pretty font-semibold">{News.title}</h1>
          <span className="text-sm text-zinc-400">{News.date}</span>
          <p className="text-base text-justify my-6 text-zinc-600">{News.content}</p>
          <Link
            to="/news"
            className="rounded font-bold border border-gray-500 bg-gray-100 text-sm text-gray-500 px-4 py-2 hover:text-red-600 hover:border-red-600 transition-all duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};
