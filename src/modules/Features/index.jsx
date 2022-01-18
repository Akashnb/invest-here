import React from "react";

import FeatureCard from "../../common/FeatureCard";
import TwoColumnSection from "../../common/TwoColumnSection";
import { features, featureTwoColumnSectionContent } from "../../utils";

const Features = () => {
  return (
    <>
      <section id="features-section" className="pt-20 pb-10 px-5 md:px-0 md:py-20">
        <div className="max-w-6xl mx-auto h-full">
          <div className="max-w-xl m-auto text-center mb-20">
            <h2 className="text-4xl font-semibold mb-3">Imagine Features</h2>
            <p className="text-lg text-textAccentMedium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              quos quaerat sapiente nam, id vero.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item) => (
              <FeatureCard
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="feature-with-two-column-section" className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto h-full space-y-28 md:space-y-52">
          {featureTwoColumnSectionContent.map((cardContent, index) => (
            <TwoColumnSection
              mainUrl={cardContent.mainUrl}
              title={cardContent.title}
              subTitle={cardContent.subTitle}
              authorCardContent={cardContent.authorCardContent}
              showReverseColumn={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
