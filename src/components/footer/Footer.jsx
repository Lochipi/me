import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <div className="bg-white text-black flex flex-col items-center py-8 border-t border-gray-300">
      <div className="flex gap-2">
        <FaGithub className="w-10 h-10 bg-black text-white transition duration-100 hover:bg-blue-900 cursor-pointer border p-1 rounded-full" />
        <FaLinkedinIn className="w-10 h-10 bg-black text-white transition duration-100 hover:bg-blue-900 cursor-pointer border-0 p-1 rounded-lg" />
        <FaTwitter className="w-10 h-10 bg-black text-white transition duration-100 hover:bg-blue-900 cursor-pointer p-1 rounded-lg" />
      </div>
      <div className="mt-2">
        <p className="text-gray-500">Copyright @2023</p>
      </div>
    </div>
  );
}

export default Footer;
