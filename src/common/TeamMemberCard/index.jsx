import React from "react";
import PropTypes from "prop-types";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../utils/icons";

const TeamMemberCard = ({ profileUrl, title, description, designation }) => (
  <div className="group relative">
    <div className="relative mb-5 align-center overflow-hidden">
      <img
        src={profileUrl}
        className="transition-all ease-in delay-300 relative"
        alt="img"
      />
      <div className="py-2 bg-accentMain h-[50px] flex items-center justify-center z-10 w-full absolute bottom-0 left-0 transition-all ease-in delay-300 translate-y-full group-hover:translate-y-0">
        <p className="px-3 text-white">
          <FacebookIcon className="w-5 h-5" />
        </p>
        <p className="px-3 text-white">
          <TwitterIcon className="w-5 h-5" />
        </p>
        <p className="px-3 text-white">
          <InstagramIcon className="w-5 h-5" />
        </p>
      </div>
    </div>
    <h2 className="text-lg text-black mb-2 font-semibold">{title}</h2>
    <p className="text-accentMain mb-4 text-sm font-semibold">{designation}</p>
    <p className="text-base text-textAccentMedium mb-4">{description}</p>
  </div>
);

TeamMemberCard.propTypes = {
  profileUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  designation: PropTypes.string,
};

TeamMemberCard.defaultProps = {
  profileUrl: "",
  title: "",
  description: "",
  designation: "",
};

export default TeamMemberCard;
