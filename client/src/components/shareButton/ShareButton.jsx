import React, { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const ShareButton = ({ url }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative inline-block">
      <AiOutlineShareAlt
        className="text-2xl text-primary cursor-pointer"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="absolute -left-2 top-9 max-w-max border rounded shadow-lg z-10 pt-1">
          <FacebookShareButton url={url} className="block px-2 py-1">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
