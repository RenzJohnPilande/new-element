import { SHOWCASE } from "@/constants/landingPage";

export const GolfShowcaseSection = () => {
  return (
    <div className="bg-[url('/images/golf-course-bg.jpg')] bg-cover bg-center flex flex-wrap justify-center content-center w-full h-max min-h-screen">
      <div className="flex flex-wrap w-full bg-black/40 h-max min-h-screen p-10">
        <div className="flex flex-wrap flex-col justify-center content-start w-full">
          <h1
            className="text-3xl font-bold text-white text-shadow max-w-[500px]"
            data-aos="fade-up"
          >
            {SHOWCASE.header}
          </h1>
          <h2 className="text-sm my-5 font-semibold text-white text-shadow" data-aos="fade-up">
            {SHOWCASE.subHeader}
          </h2>
          <p className="text-sm text-white text-shadow max-w-[500px]" data-aos="fade-up">
            {SHOWCASE.content}
          </p>
        </div>
      </div>
    </div>
  );
};
