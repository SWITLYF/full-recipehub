import React, { useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import {
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { FaClipboard } from "react-icons/fa";

const ShareButton = ({ url }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Recipe URL copied to clipboard!');
    }, (err) => {
      console.error('Could not copy recipe URL: ', err);
    });
  };

  return (
    <div className="relative inline-block">
      <AiOutlineShareAlt
        className="text-2xl text-primary cursor-pointer"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="absolute -left-2 top-9 border rounded shadow-lg z-10 pt-1 bg-white flex space-x-2">
          <FacebookShareButton url={url} className="block px-2 py-1">
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <div
            className="block px-2 py-1 cursor-pointer flex items-center"
            onClick={copyToClipboard}
          >
            <FaClipboard size={32} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
