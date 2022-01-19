import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../../common/TestimonialCard";
import { TestimonialContent } from "../../utils";

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="#testimonials" className="px-5 py-20 bg-bgSecondaryLight">
      <div className="max-w-md md:max-w-6xl mx-auto h-full">
        <div className="max-w-xl m-auto text-center mb-12">
          <h2 className="text-4xl font-semibold">Testimonials</h2>
        </div>
        <div className="max-w-4xl m-auto">
          <Slider {...settings}>
            {TestimonialContent.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                profileUrl={testimonial.profileUrl}
                quote={testimonial.quote}
                name={testimonial.name}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
