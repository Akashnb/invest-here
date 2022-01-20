import React from "react";

import { FacebookIcon2, InstagramIcon2, LinkedInIcon, PinterestIcon, TwitterIcon2 } from "../../utils/icons";

const Footer = () => {
  return (
    <footer id="#footer" className="bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex items-center flex-col">
        <div className="mb-8 flex">
          <p className="p-4"><FacebookIcon2 /></p>
          <p className="p-4"><TwitterIcon2 /></p>
          <p className="p-4"><InstagramIcon2 /></p>
          <p className="p-4"><LinkedInIcon /></p>
          <p className="p-4"><PinterestIcon /></p>
        </div>
        <p className="text-base text-textAccentMedium text-center">
          Copyright ©2022 All rights reserved | made by{" "}
          <a
            href="https://www.linkedin.com/in/akash-bambhaniya/"
            target="_blank"
            className="text-accentMain font-bold"
          >
            Akash Bambhaniya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
