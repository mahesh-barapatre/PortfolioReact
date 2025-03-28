import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const navElement = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Skills",
    link: "about",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Resume",
    link: "resume",
  },
  {
    title: "Contact me",
    link: "contact",
  },
];

const optnCss =
  "p-1 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white transform ease-in-out duration-100";
const activeCss =
  "p-1 text-white border-2 border-white bg-blue-500 transform ease-in-out duration-100";

const SmallNav = () => {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();

  const navHandler = (path) => {
    navigate(path);
    setActive(path);
    setNavShow((prev) => !prev);
    // console.log(active)
  };

  return (
    <div className="sm:hidden mt-2 text-sm flex justify-evenly items-center font-semibold">
      {navElement.map((ele, i) => (
        <div
          key={i}
          className={active === ele.link ? activeCss : optnCss}
          onClick={() => navHandler(ele.link)}
        >
          {ele.title}
        </div>
      ))}
    </div>
  );
};

export default SmallNav;
