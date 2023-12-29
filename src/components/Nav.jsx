import React, { useState } from "react";
import { SiHomebridge } from "react-icons/si";
import { CgLoadbarSound } from "react-icons/cg";
import { MdContacts } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const optnCss =
  "w-full cursor-pointer text-lg border-2 border-blue-50 text-blue-500 font-extrabold flex py-3 px-6 transform ease-in-out duration-100";
const activeCss =
  "w-full cursor-pointer text-lg border-2 border-black text-black font-extrabold flex py-3 px-6 transform ease-in-out duration-100";

function Nav({setNavShow}) {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();

  const navHandler = (path) => {
    navigate(path);
    setActive(path);
    setNavShow(prev=>!prev);
    // console.log(active)
  };

  return (
    <div className="w-full h-screen p-5 flex flex-col bg-blue-50">
      <img
        src="https://rahulkp15.onrender.com/static/media/sidenavLight.d0d918eb1db49ef3ddc6.png"
        alt="img"
        // className="hidden sm:block"
      />
      <div className={active === '/' ? activeCss : optnCss } onClick={() => navHandler("/")}>
        <SiHomebridge className="pr-3" size={"35"} />
        Home
      </div>
      <div onClick={() => navHandler("/about")} className={active === '/about' ? activeCss : optnCss }>
        <HiOutlineUserCircle className="pr-3" size={"35"} />
        About me
      </div>
      <div onClick={() => navHandler("/projects")} className={active === '/projects' ? activeCss : optnCss }>
        <GrProjects className="pr-3" size={"35"} />
        Projects And Blogs
      </div>
      <div onClick={() => navHandler("/resume")} className={active === '/resume' ? activeCss : optnCss }>
        <CgLoadbarSound className="pr-3" size={"35"} />
        Resume
      </div>
      <div onClick={() => navHandler("/contact")} className={active === '/contact' ? activeCss : optnCss }>
        <MdContacts className="pr-3" size={"35"} />
        Contact me
      </div>
    </div>
  );
}

export default Nav;
