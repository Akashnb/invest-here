import React from "react";
import PropTypes from "prop-types";

const TestimonialCard = ({ profileUrl, quote, name }) => (
  <div>
    <img
      className="inline-block h-20 w-20 rounded-full shadow-xl mx-auto my-5"
      src={profileUrl}
      alt={profileUrl}
    />
    <p className="leading-10 text-2xl italic text-center text-textAccentMedium">
      {quote}
    </p>
    <p className="my-4 text-lg font-semibold text-center">{name}</p>
  </div>
);

TestimonialCard.propTypes = {
  profileUrl: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
};

TestimonialCard.defaultProps = {
  profileUrl: "",
  name: "",
  quote: "",
};

export default TestimonialCard;
