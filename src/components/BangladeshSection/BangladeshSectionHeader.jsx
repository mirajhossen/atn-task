import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default function BangladeshSectionHeader() {
  const [selectedCategory, setSelectedCategory] = useState("বিভাগ");
  const [selectedDistrict, setSelectedDistrict] = useState("জেলা");
  const [selectedUpazila, setSelectedUpazila] = useState("উপজেলা");

  const categories = [
    "বিভাগ",
    "জাতীয়",
    "আন্তর্জাতিক",
    "খেলা",
    "বিনোদন",
    "রাজনীতি",
  ];
  const districts = ["জেলা", "ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "বরিশাল"];
  const upazilas = [
    "উপজেলা",
    "ধানমন্ডি",
    "গুলশান",
    "বনানী",
    "উত্তরা",
    "মিরপুর",
  ];
  return (
    <header className="">
         <h1 className="text-2xl px-4 my-2.5">বাংলাদেশ</h1>
      <div className="bg-[#01784B0D] mx-4 px-4 flex items-center justify-betwe py-4 gap-4 rounded-md">
        {/* Logo */}
       
        <div className="flex items-center">
          <p className="text-xl font-bold text-gray-900">আমার এলাকা</p>
        </div>

        {/* Navigation Dropdowns */}
        <div className="flex items-center space-x-4 ">
          <div className="flex-1">
            <Dropdown
              value={selectedCategory}
              options={categories}
              onChange={setSelectedCategory}
              placeholder="বিভাগ"
            />
          </div>
          <div className="flex-1">
            <Dropdown
              value={selectedDistrict}
              options={districts}
              onChange={setSelectedDistrict}
              placeholder="জেলা"
            />
          </div>
          <div className="flex-1">
            <Dropdown
              value={selectedUpazila}
              options={upazilas}
              onChange={setSelectedUpazila}
              placeholder="উপজেলা"
            />
          </div>
        </div>


        {/* Search Button */}
        <button className="w-[130px] whitespace-nowrap bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-200">
          <Search className="w-5 h-5 mr-2" />
          খোঁজ করুন
        </button>
      </div>
    </header>
  );
}
