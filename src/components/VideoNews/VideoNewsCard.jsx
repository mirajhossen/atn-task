import { Clock, Play } from "lucide-react";
import React from "react";

export default function VideoNewsCard({news}) {
    const {img, title, time} = news;
  return (
    <div className="">
      <div className="relative">
        <img className="w-full" src={img} alt="" />
        <div className="px-[21px] py-[7px] text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
           <img src="/images/play-icon.png" alt="" />
        </div>
      </div>
      <h2>{title}</h2>
      <div className="flex gap-1 items-center">
        <Clock size={20} className="text-[#868686]" />
        <span className="text-[#868686] text-sm">{time} মিনিট আগে</span>
      </div>
    </div>
  );
}
