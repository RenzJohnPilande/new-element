import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import TailwindSpinner from "@/components/TailwindSpinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumbs } from "@/components/breadcrumbs";

function Policy() {
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
      <div className="bg-[url('/images/background/policy.jpg')] lg:bg-[url()] bg-slate-950 bg-cover bg-center h-80 lg:h-max">
        <Header />
      </div>
      <div className="w-full flex px-2 py-5 justify-center capitalize bg-slate-300">
        <Breadcrumbs home="home" current="Company Policies" />
      </div>
      <div className="container flex-grow flex flex-wrap py-5 px-3">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full content-start">
            <div className="flex flex-wrap flex-col content-center justify-center w-full my-6 text-center ">
              <h1 className="text-3xl font-bold text-black mb-2" data-aos="fade-up">
                Company Policies
              </h1>
              <p className="text-base text-black" data-aos="fade-up">
                Learn about our guidelines, standards, and commitment to excellence
              </p>
            </div>
            <div className="flex flex-wrap w-full md:px-10 text-pretty" data-aos="fade-up">
              <Accordion
                type="single"
                className="w-full border border-gray-400 rounded shadow-lg"
                collapsible
                c
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-black p-3 text-sm text-start">
                    CODE OF CONDUCT AND ETHICAL BUSINESS POLICY
                  </AccordionTrigger>
                  <AccordionContent className="border p-5 leading-7 text-justify">
                    At New Element Inc., we uphold the highest standards of ethical behavior and
                    integrity in all aspects of our operations. Our Code of Conduct serves as a
                    guiding framework for every member of our team, ensuring transparency, honesty,
                    and accountability in every interaction with our stakeholders, partners, and the
                    community. We are committed to conducting our business with fairness, respect,
                    and professionalism, adhering to legal requirements and ethical principles in
                    all our endeavors.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-black p-3 text-sm text-start">
                    DIVERSITY, EQUITY, AND INCLUSION POLICY
                  </AccordionTrigger>
                  <AccordionContent className="border p-5 leading-7 text-justify">
                    New Element Inc. embraces diversity, equity, and inclusion as fundamental values
                    that enrich our workplace culture and drive innovation. We are dedicated to
                    fostering a work environment where every individual is valued, respected, and
                    empowered to contribute their unique perspectives and talents. We actively
                    promote diversity in all forms, including but not limited to gender, race,
                    ethnicity, age, religion, sexual orientation, and disability. By championing
                    diversity, equity, and inclusion, we aim to cultivate a workforce that reflects
                    the diversity of the communities we serve and ensures equal opportunities for
                    all.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-black p-3 text-sm text-start">
                    ANTI-SEXUAL HARASSMENT POLICY
                  </AccordionTrigger>
                  <AccordionContent className="border p-5 leading-7 text-justify">
                    At New Element Inc., we maintain a zero-tolerance policy towards sexual
                    harassment in any form. We are committed to providing a safe and respectful
                    workplace environment where every individual feels secure and protected from
                    harassment, discrimination, or any inappropriate conduct. Our anti-sexual
                    harassment policy prohibits unwelcome behavior of a sexual nature, including
                    verbal, physical, or visual harassment. We encourage prompt reporting of any
                    incidents, and we are dedicated to investigating complaints thoroughly and
                    taking appropriate disciplinary action against offenders. Our goal is to create
                    a workplace culture that promotes dignity, mutual respect, and professionalism
                    for all employees.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-black p-3 text-sm text-start">
                    PERSONAL DATA PRIVACY POLICY
                  </AccordionTrigger>
                  <AccordionContent className="border p-5 leading-7 text-justify">
                    New Element Inc. is committed to protecting the privacy and security of personal
                    data entrusted to us by our customers, employees, and other stakeholders. Our
                    Personal Data Privacy Policy outlines our practices for collecting, using,
                    storing, and protecting personal information in compliance with applicable data
                    protection laws. We respect individuals' rights to access, correct, and delete
                    their personal data, and we implement robust security measures to safeguard
                    against unauthorized access, disclosure, or misuse of personal information. By
                    adhering to strict privacy standards, we aim to maintain trust and confidence in
                    our handling of personal data while fulfilling our business objectives
                    responsibly.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-black p-3 text-sm text-start">
                    ENVIRONMENT POLICY
                  </AccordionTrigger>
                  <AccordionContent className="border p-5 leading-7 text-justify">
                    As a responsible corporate citizen, New Element Inc. is committed to minimizing
                    our environmental impact and promoting sustainable practices throughout our
                    operations. We strive to integrate environmental considerations into our
                    business decisions, from product design and manufacturing to logistics and waste
                    management. Our Environmental Policy emphasizes resource conservation, pollution
                    prevention, and the adoption of eco-friendly technologies and practices. We are
                    dedicated to complying with environmental regulations, reducing our carbon
                    footprint, and contributing positively to the communities and ecosystems where
                    we operate. Through continuous improvement and innovation, we aim to contribute
                    to a healthier planet for current and future generations.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-black p-3 text-sm text-start">
                    FREEDOM OF ASSOCIATION POLICY
                  </AccordionTrigger>
                  <AccordionContent className="border p-5 leading-7 text-justify">
                    New Element Inc. respects and upholds the rights of our employees to freedom of
                    association and collective bargaining as guaranteed by international labor
                    standards and local laws. We recognize the importance of open dialogue and
                    constructive engagement between management and employees, including the right to
                    join or form trade unions or other representative bodies of their choosing. Our
                    Freedom of Association Policy ensures that employees have the freedom to
                    organize, express their views, and negotiate collective agreements without fear
                    of retaliation or discrimination. We are committed to fostering constructive
                    labor relations based on mutual respect, fairness, and cooperation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Policy;
