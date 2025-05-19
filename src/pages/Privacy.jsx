import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import { Breadcrumbs } from "@/components/breadcrumbs";

function Privacy() {
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
      <div className="bg-[url('/images/background/privacy.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="Privacy Statement" />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full content-start">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center ">
              <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
                Privacy Statement
              </h1>
              <p className="text-base text-black" data-aos="fade-up">
                Your privacy matters to us. Learn how we protect your information.
              </p>
            </div>
            <div className="flex flex-wrap w-full md:px-10 text-pretty" data-aos="fade-up">
              <span className="text-xs">Updated: 10 July 2024</span>
              <div className="my-4 text-justify">
                <p className="text-sm">
                  At New Element Inc., we are committed to protecting your privacy and ensuring the
                  security of your personal information. This Privacy Statement explains how we
                  collect, use, disclose, and protect the personal data we receive from our
                  customers, employees, suppliers, and other individuals who interact with us.
                </p>
              </div>
              <div className="my-4 text-justify text-sm">
                <h1 className="font-bold">Collection of Personal Data:</h1>
                <p className="my-2">
                  We may collect personal data directly from you or from third parties, such as when
                  you visit our website, purchase our products or services, apply for employment, or
                  communicate with us. The types of personal data we collect may include your name,
                  contact information, payment details, employment history, and other relevant
                  information necessary for the purposes outlined in this Privacy Statement.
                </p>
              </div>
              <div className="my-4 text-sm w-full">
                <h1 className="font-bold">Use of Personal Data:</h1>
                <p className="my-2">We use your personal data for various purposes, including:</p>
                <div className="container">
                  <ul className="list-disc leading-7">
                    <li>
                      <p>Providing products and services you request.</p>
                    </li>
                    <li>
                      <p>Processing transactions and payments.</p>
                    </li>
                    <li>
                      <p>Communicating with you about your orders, inquiries, or requests.</p>
                    </li>
                    <li>
                      <p>Managing our relationship with you.</p>
                    </li>
                    <li>
                      <p>
                        Conducting marketing and promotional activities, where permitted by law.
                      </p>
                    </li>
                    <li>
                      <p>Complying with legal and regulatory obligations.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="my-4 text-justify text-sm w-full">
                <h1 className="font-bold">Disclosure of Personal Data:</h1>
                <p className="my-2">
                  We may disclose your personal data to third parties under the following
                  circumstances:
                </p>
                <div className="container">
                  <ul className="list-disc leading-7">
                    <li>
                      <p>
                        To service providers and business partners who assist us in fulfilling
                        orders, providing services, or conducting business operations.
                      </p>
                    </li>
                    <li>
                      <p>
                        To comply with legal obligations or respond to lawful requests from public
                        authorities.
                      </p>
                    </li>
                    <li>
                      <p>To protect our rights, property, or safety or that of others.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="my-4 text-justify text-sm">
                <h1 className="font-bold">Data Security:</h1>
                <p className="my-2">
                  We implement appropriate technical and organizational measures to protect your
                  personal data against unauthorized access, use, disclosure, alteration, or
                  destruction. We restrict access to your personal data to authorized personnel only
                  and ensure that our third-party service providers adhere to similar security
                  standards.
                </p>
              </div>
              <div className="my-4 text-justify text-sm">
                <h1 className="font-bold">Retention of Personal Data:</h1>
                <p className="my-2">
                  We retain your personal data for as long as necessary to fulfill the purposes
                  outlined in this Privacy Statement, unless a longer retention period is required
                  or permitted by law.
                </p>
              </div>
              <div className="my-4 text-justify text-sm">
                <h1 className="font-bold">Your Rights:</h1>
                <p className="my-2">
                  You have the right to access, correct, or delete your personal data, as well as
                  the right to restrict or object to certain processing activities. You may also
                  withdraw any consent you have provided for processing your personal data, where
                  applicable.
                </p>
              </div>
              <div className="my-4 text-justify text-sm">
                <h1 className="font-bold">Contact Us:</h1>
                <p className="my-2">
                  If you have any questions or concerns about our use of your personal data or this
                  Privacy Statement, please contact us using the information provided below.
                </p>
              </div>
              <div className="my-4 text-justify text-sm">
                <h1 className="font-bold">Updates to this Privacy Statement:</h1>
                <p className="my-2">
                  We may update this Privacy Statement from time to time to reflect changes in our
                  privacy practices or legal requirements. We encourage you to review this Privacy
                  Statement periodically for any updates.
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
export default Privacy;
