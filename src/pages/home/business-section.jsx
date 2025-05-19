import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

export const BusinessSection = ({ data }) => {
  return (
    <div id="businesses" className="w-full flex justify-center flex-wrap px-5 py-10">
      <div data-aos="fade-up" className="w-full text-center py-5">
        <span className="text-3xl font-bold">Our Businesses</span>
      </div>
      <Carousel
        data-aos="fade-up"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full max-w-6xl"
      >
        <CarouselContent>
          {data.map((business, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-none border-0">
                  <CardHeader className="p-0 m-0">
                    <img
                      className="w-full object-cover object-bottom h-64"
                      src={business.image}
                      alt={business.title}
                    />
                  </CardHeader>
                  <CardContent className="p-4 border border-b-0 h-64">
                    <CardTitle className="flex flex-wrap content-center h-2/5">
                      <span className="text-4xl font-bold capitalize mb-5">{business.title}</span>
                    </CardTitle>
                    <p className="text-sm leading-6 line-clamp-4">{business.description}</p>
                  </CardContent>
                  <CardFooter className="flex border border-y-0 justify-center">
                    <Link
                      to={business.link}
                      className="bg-white text-sm text-slate-950 py-1 px-10 rounded-full rounded font-semibold border border-slate-950 hover:border-red-600 hover:text-red-600 transition-all ease-in-out duration-600"
                    >
                      view
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-wrap justify-center my-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
