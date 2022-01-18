import React from "react";
import clsx from "classnames";

import AuthorCard from "../AuthorCard";

const TwoColumnSection = ({
  mainUrl,
  title,
  subTitle,
  authorCardContent,
  showReverseColumn,
  extraContent,
}) => {
  console.log("5-> showReverseColumn", showReverseColumn, extraContent);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className={clsx('order px-5', { "md:order-2": showReverseColumn })}>
        <img src={mainUrl} alt={mainUrl} />
      </div>
      <div className="mt-5 px-5 md:px-16">
        <h2 className="text-4xl font-bold mb-9 font-display">{title}</h2>
        <p className="my-5 text-base text-textAccentMedium">{subTitle}</p>
        {authorCardContent && (
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
};

export default TwoColumnSection;
