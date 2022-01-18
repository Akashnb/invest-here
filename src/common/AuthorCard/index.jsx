import React from "react";

const AuthorCard = ({ avatarUrl, name, designation, quote }) => {
  return (
    <div className="p-5 border-l-8 border-l-accentMain bg-white shadow-lg rounded border font-display">
      <div className="flex mb-8">
        <img
          className="inline-block h-12 w-12 rounded-full mr-4"
          src={avatarUrl}
          alt={avatarUrl}
        />
        <div>
          <h6 className="text-base font-bold">{name}</h6>
          <p className="text-base">{designation}</p>
        </div>
      </div>
      <blockquote className="italic text-base text-textAccentMedium">
        {quote}
      </blockquote>
    </div>
  );
};

export default AuthorCard;
