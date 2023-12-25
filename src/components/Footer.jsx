import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { PiBracketsAngle } from "react-icons/pi";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoLogoMedium } from "react-icons/io5";
function Footer() {

  const linkedinUrl = "https://www.linkedin.com/in/mahesh-barapatre-a93731225/";  
  const gitUrl = "https://github.com/mahesh-barapatre";  
  const leetcodeUrl = "https://leetcode.com/mahesh_b14/";  
  const twitterUrl = "https://twitter.com/doit_mahesh";  
  const mediumUrl = "https://medium.com/@maheshbarapatre14";  

  return (
    <div className="w-full sm:text-xl text-xs flex flex-col sm:flex-row bg-blue-50 p-4 font-extrabold text-blue-500">
      <div className="sm:w-2/3 w-full flex mb-5 sm:mb-0">
        © 2023 <PiBracketsAngle className="mt-1 mr-1 hidden sm:inline-block" />{" "}
        with <FaHeart className="mt-1 mx-1 hidden sm:inline-block" /> by Mahesh
        Barapatre • All Rights Reserved
      </div>
      <div className="flex sm:w-1/3 w-full justify-evenly text-gray-500">
        <IoLogoLinkedin
          onClick={() => window.open(linkedinUrl, "_blank")}
          className="hover:text-gray-700 hover:scale-110 ease-in-out duration-100 cursor-pointer"
        />
        <FaGithub
          onClick={() => window.open(gitUrl, "_blank")}
          className="hover:text-gray-700 hover:scale-110 ease-in-out duration-100 cursor-pointer"
        />
        <TbBrandLeetcode
          onClick={() => window.open(leetcodeUrl, "_blank")}
          className="hover:text-gray-700 hover:scale-110 ease-in-out duration-100 cursor-pointer"
        />
        <RiTwitterXFill
          onClick={() => window.open(twitterUrl, "_blank")}
          className="hover:text-gray-700 hover:scale-110 ease-in-out duration-100 cursor-pointer"
        />
        <IoLogoMedium
          onClick={() => window.open(mediumUrl, "_blank")}
          className="hover:text-gray-700 hover:scale-110 ease-in-out duration-100 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Footer
