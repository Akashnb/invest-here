import React from "react";

import { CheckIcon } from '../../utils/icons';
import TwoColumnSection from "../../common/TwoColumnSection";

const ExtraContentForTwoColumn = () => {
  return (
    <div className="flex flex-col">
      <div className="space-y-4 text-base text-textAccentMedium">
        <p className="flex"><CheckIcon className="mr-3 text-green-600" />Laborum enim quasi at modi</p>
        <p className="flex"><CheckIcon className="mr-3 text-green-600" />Ad at tempore</p>
        <p className="flex"><CheckIcon className="mr-3 text-green-600" />Labore quaerat esse</p>
      </div>
      <button className="w-fit relative transition mt-8 bg-accentMain px-6 py-3 rounded-full text-white text-base shadow-accentMain hover:shadow-accentMainHover hover:-top-px">
        Get Started
      </button>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section id="#aboutus" className="py-20 bg-bgSecondaryLight">
      <div className="max-w-6xl mx-auto h-full">
        <div className="max-w-xl m-auto text-center mb-12">
          <h2 className="text-4xl font-semibold">About Us</h2>
        </div>
        <TwoColumnSection
          mainUrl="https://gist.githubusercontent.com/Akashnb/f322e2aa6ef176f5aa2b425ac6e124ca/raw/229159098b78f3e6636a79238c3c7a6bb3115462/image-one.svg"
          title="Our Mission"
          subTitle="Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque."
          extraContent={<ExtraContentForTwoColumn />}
        />
      </div>
    </section>
  );
};

export default AboutUs;
