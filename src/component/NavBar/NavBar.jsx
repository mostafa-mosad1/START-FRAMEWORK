import { Menu } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  let [open, setOpen] = useState(false);
  let [heightNav, setHeightNav] = useState("15px");

  (function nav() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHeightNav("2px");
      } else {
        setHeightNav("15px");
      }
    });
  })();

  return (
    <div
      style={{ paddingBlock: heightNav }}
      className={`w-full bg-[#2c3e50]  sticky top-0 left-0 z-[1000] duration-[1s]  `}
    >
      <div className="md:flex items-center justify-between container py-5 md:px-10 px-7 ">
        <Link to="" className="font-bold text-3xl  text-white">
          START FRAMEWORK
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-8 top-8 cursor-pointer md:hidden "
        >
          <Menu />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static  text-white bg-[#2c3e50] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="p-4">
            <NavLink to={"About"}>ABOUT</NavLink>
          </li>
          <li className="p-4">
            <NavLink to={"Portfolio"}>PORTFOLIO</NavLink>
          </li>
          <li className="p-4">
            <NavLink to={"Contact"}>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
