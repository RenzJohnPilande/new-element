import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/breadcrumbs";

function Error() {
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
      <div className=" flex-wrap content-center justify-center w-screen h-screen">
        <div className="container w-80">
          <TailwindSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[url('https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="Error 404" />
      </div>
      <div className="container-fluid flex flex-wrap flex-grow border-t py-5 md:py-10 mx-1 md:mx-5">
        <div className="flex flex-col justify-center container w-full text-center leading-8 py-20">
          <span className="text-9xl font-bold">404</span>
          <span className="capitalize text-xl font-bold">not found</span>
          <p className="capitalize text-sm">
            this page does not exist. Go back to
            <Link to="/" className="font-bold underline underline-offset-2 mx-1">
              Home Page
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Error;
