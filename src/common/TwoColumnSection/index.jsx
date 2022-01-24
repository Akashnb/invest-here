import React from "react";
import clsx from "classnames";
import PropTypes from "prop-types";

import AuthorCard from "../AuthorCard";

const TwoColumnSection = ({
  mainUrl,
  title,
  subTitle,
  authorCardContent,
  showReverseColumn,
  extraContent,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className={clsx("order px-5", { "md:order-2": showReverseColumn })}>
      <img src={mainUrl} alt={mainUrl} />
    </div>
    <div className="mt-5 px-5 md:px-16">
      <h2 className="text-4xl font-bold mb-9 font-display">{title}</h2>
      <p className="my-5 text-base text-textAccentMedium">{subTitle}</p>
      {authorCardContent && Object.keys(authorCardContent).length > 0 && (
        <AuthorCard
          avatarUrl={authorCardContent.authorImgUrl}
          name={authorCardContent.authorName}
          designation={authorCardContent.authorDesignation}
          quote={authorCardContent.quote}
        />
      )}
      {extraContent}
    </div>
  </div>
);

TwoColumnSection.propTypes = {
  mainUrl: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  showReverseColumn: PropTypes.bool,
  authorCardContent: PropTypes.instanceOf(Object),
  children: PropTypes.node,
};

TwoColumnSection.defaultProps = {
  mainUrl: "",
  title: "",
  subTitle: "",
  showReverseColumn: false,
  authorCardContent: {},
};

export default TwoColumnSection;
