import React from "react";
import { useLocation } from "react-router-dom";
import SmallNav from "./SmallNav";

function Header() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About Me";
      case "/projects":
        return "Projects & Exp";
      case "/contact":
        return "Contact Me";
      case "/resume":
        return "My Resume";
      case "/default":
        return "Home";
    }
  };
  let title = getTitle();

  return (
    <div className="fixed z-40 opacity-70 bg-blue-50 w-full py-5 px-8 text-3xl font-extrabold text-blue-700">
      {`<${title}/>`}
      <SmallNav />
    </div>
  );
}

export default Header;
