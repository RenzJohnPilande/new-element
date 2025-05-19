import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";

function Contacts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    <div className="flex flex-col min-h-screen">
      <div className="bg-[url('https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="contact us" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-center container flex-wrap pt-5">
          <h1 className="font-bold text-4xl w-full my-5 text-center">Contact Us!</h1>
          <p className="container text-slate-800 w-full lg:w-3/4 text-center">
            We'd love to hear from you! Whether you have questions about our services, want to
            discuss a potential collaboration, or simply want to say hello, feel free to reach out
            to us using the contact information below.
          </p>
          <div className="container flex flex-wrap justify-center content-center w-full py-10 px-2 mx-auto">
            <div className="flex border border-slate-400 hover:border-red-800 hover:text-red-800 w-full md:w-64 lg:w-96 h-auto min-h-32 justify-start py-6 px-4 my-3 mx-auto h-32">
              <div className="my-auto mx-1">
                <FaLocationDot className="text-4xl" />
              </div>
              <div className="my-auto mx-1">
                <h1 className="font-bold text-lg">Location</h1>
                <p className="text-sm">
                  Unit 909 Avida Tower 1, Madrigal Business Park, Alabang 1770 City of Muntinlupa,
                  NCR
                </p>
              </div>
            </div>
            <div className="flex border border-slate-400 hover:border-red-800 hover:text-red-800 w-full md:w-64 lg:w-96 h-auto min-h-32 justify-start py-6 px-4 my-3 mx-auto h-32">
              <div className="my-auto mx-1">
                <FaEnvelope className="text-4xl" />
              </div>
              <div className="my-auto mx-1">
                <h1 className="font-bold text-lg">Email</h1>
                <p className="text-sm">services@phnei.com</p>
              </div>
            </div>
            <div className="flex border border-slate-400 hover:border-red-800 hover:text-red-800 w-full md:w-64 lg:w-96 h-auto min-h-32 justify-start py-6 px-4 my-3 mx-auto h-32">
              <div className="my-auto mx-1">
                <FaPhone className="text-4xl" />
              </div>
              <div className="my-auto mx-1">
                <h1 className="font-bold text-lg">Phone</h1>
                <p className="text-sm">028350-6666</p>
              </div>
            </div>
            <div className="flex border border-slate-400 hover:border-red-800 hover:text-red-800 w-full md:w-64 lg:w-96 h-auto min-h-32 justify-start py-6 px-4 my-3 mx-auto h-32">
              <div className="my-auto mx-1">
                <FaFacebook className="text-4xl" />
              </div>
              <div className="my-auto mx-1">
                <h1 className="font-bold text-lg">Facebook</h1>
                <p className="text-sm">Facebook.com/newelementinc/</p>
              </div>
            </div>
            <div className="flex border border-slate-400 hover:border-red-800 hover:text-red-800 w-full md:w-64 lg:w-96 h-auto min-h-32 justify-start py-6 px-4 my-3 mx-auto h-32">
              <div className="my-auto mx-1">
                <FaTwitter className="text-4xl" />
              </div>
              <div className="my-auto mx-1">
                <h1 className="font-bold text-lg">Twitter</h1>
                <p className="text-sm">(Our Twitter page is coming soon. Follow us for updates.)</p>
              </div>
            </div>
            <div className="flex border border-slate-400 hover:border-red-800 hover:text-red-800 w-full md:w-64 lg:w-96 h-auto min-h-32 justify-start py-6 px-4 my-3 mx-auto h-32">
              <div className="my-auto mx-1">
                <FaInstagram className="text-4xl" />
              </div>
              <div className="my-auto mx-1">
                <h1 className="font-bold text-lg">Instagram</h1>
                <p className="text-sm">
                  (Our Instagram page is coming soon. Follow us for updates.)
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
export default Contacts;
