import React from "react";

import FeatureCard from "../../common/FeatureCard";
import TwoColumnSection from "../../common/TwoColumnSection";
import { features, featureTwoColumnSectionContent } from "../../utils";

const Features = () => (
  <>
    <section id="#features" className="px-5 py-20">
      <div className="max-w-6xl mx-auto h-full">
        <div className="max-w-xl m-auto text-center mb-20">
          <h2 className="text-4xl font-semibold mb-3">Features</h2>
          <p className="text-lg text-textAccentMedium">
            Discover Our Key Features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </div>
      </div>
    </section>
    <section id="feature-with-two-column-section" className="py-20">
      <div className="max-w-6xl mx-auto h-full space-y-28 md:space-y-52">
        {featureTwoColumnSectionContent.map((cardContent, index) => (
          <TwoColumnSection
            key={cardContent.id}
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

export default Features;
