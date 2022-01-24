import React from "react";
import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, subTitle }) => (
  <div className="group px-8 pt-16 pb-8 mb-16 bg-bgSecondaryMain relative rounded transition ease-in delay-50 hover:bg-accentMain hover:-top-2">
    <div className="absolute -top-10 left-1/2 -translate-x-2/4">
      <div className="relative inline-block h-20 w-20 rounded-full bg-accentMain shadow-accentMain group-hover:bg-bgPrimaryMain">
        <span className="text-4xl absolute top-1/2 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white group-hover:text-accentMain">
          {icon}
        </span>
      </div>
    </div>
    <div className="text-center">
      <h3 className="text-lg font-medium mb-2 group-hover:text-bgPrimaryMain">
        {title}
      </h3>
      <p className="text-base text-textAccentMedium mb-4 group-hover:text-bgPrimaryMain">
        {subTitle}
      </p>
      <span className="text-base text-accentMain cursor-pointer group-hover:text-bgPrimaryMain">
        Learn More
      </span>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

FeatureCard.defaultProps = {
  icon: "",
  title: "",
  subTitle: "",
};

export default FeatureCard;
