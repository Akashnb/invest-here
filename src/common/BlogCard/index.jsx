import React from "react";

const BlogCard = ({ title, url, name, date, content, blogType }) => {
  return (
    <div className="flex flex-col items-start">
      <img
        src={url}
        alt={name}
        className="mb-6"
      />
      <h2 className="mb-2 text-3xl font-semibold">
        {title}
      </h2>
      <div className="flex text-sm text-textAccentMedium items-center mb-6">
        {name}{" "}
        <span className="mx-3 w-1 h-1 bg-textAccentMedium rounded" /> {date} <span className="mx-3 w-1 h-1 bg-textAccentMedium rounded" />{" "}
        <span className="text-accentMain">{blogType}</span>
      </div>
      <p className="text-base text-textAccentMedium mb-4">
        {content}
      </p>
      <button className="text-accentMain mb-4">Continue Reading...</button>
    </div>
  );
};

export default BlogCard;
