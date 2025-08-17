import React from 'react';
import { useState } from "react";
import { Home, Bell, Search, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
   const menuItems = [
    { label: "সর্বশেষ", link: "#" },
    { label: "জাতীয়", link: "#" },
    { label: "রাজনীতি", link: "#" },
    { label: "অর্থনীতি", link: "#" },
    { label: "আন্তর্জাতিক", link: "#" },
    { label: "সারাদেশ", link: "#", dropdown: true },
    { label: "খেলা", link: "#" },
    { label: "বিনোদন", link: "#" },
    { label: "জবস", link: "#" },
  ];


  return (
      <nav className="mt-2.5 bg-green-700 text-white">
      <div className="max-w-7xl mx-auto pr-4">
        <div className="flex justify-between items-center h-14">
          {/* Left Section */}
          <div className="pl-[220px] flex items-center">
            <Home className="mr-5 w-5 h-5 " />
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-5">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center hover:underline"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 cursor-pointer" />
            <Search className="w-5 h-5 cursor-pointer" />
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block py-2 border-b border-green-600 flex items-center"
            >
              {item.label}
              {item.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;