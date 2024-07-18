"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import "./NavBar.css"; // Make sure to import your CSS file

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbar = useRef();

  const menuItems = {
    services: ["data analytics", "business analytics", "SEO"],
    "free products": ["Free Ebooks", "Free Courses", "Free Tools"],
    carrier: ["Job Openings", "Internships", "Career Development"],
  };

  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  const handleMouseEnter = (item) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <Link href="">
          <h1 className="big-text">Quintle</h1>
        </Link>

        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
            } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "about"].map((link) => (
              <li
                key={link}
                className={`${
                  selectedItem === link ? "text-rose-600" : ""
                } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
                onClick={() => setSelectedItem(link)}
              >
                <Link href={`#${link}`}>{link}</Link>
              </li>
            ))}
            {Object.keys(menuItems).map((menuItem) => (
              <li
                key={menuItem}
                className={`relative ${
                  selectedItem === menuItem ? "text-rose-600" : ""
                } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
                onMouseEnter={() => handleMouseEnter(menuItem)}
                onMouseLeave={handleMouseLeave}
              >
                <span>{menuItem}</span>
                {activeDropdown === menuItem && (
                  <ul
                    className={`absolute left-0 mt-2 ${
                      theme === "dark" ? "bg-[#121212] text-white" : "bg-white text-black"
                    } shadow-lg`}
                  >
                    {menuItems[menuItem].map((sublink) => (
                      <li
                        key={sublink}
                        className={`${
                          selectedItem === sublink ? "text-rose-600" : ""
                        } capitalize py-2 px-4 hover:bg-rose-600 hover:text-white`}
                        onClick={() => setSelectedItem(sublink)}
                      >
                        <Link href={`#${sublink}`}>{sublink}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li
              key="contact"
              className={`${
                selectedItem === "contact" ? "text-rose-600" : ""
              } capitalize border-b py-4 md:border-none md:py-0 hover:text-rose-600`}
              onClick={() => setSelectedItem("contact")}
            >
              <Link href="#contact">contact</Link>
            </li>
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link href="https://www.facebook.com/profile.Quick" target="_blank">
                <FacebookOutlinedIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/in/Quick/"}>
                <LinkedInIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://github.com/Quick/"}>
                <GitHubIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://www.instagram.com/Quick/"}>
                <InstagramIcon className="cursor-pointer hover:text-rose-600 text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-rose-600 border-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:text-white rounded-full">
            <Link href="/index.html">LogIn/SignUp</Link>
          </button>
          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
