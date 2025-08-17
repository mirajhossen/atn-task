import { Clock } from "lucide-react";
import React from "react";

export default function BangladeshNewsSmallCard({ article, isLarge = false }) {
  return (
    <div
      className={`rounded-lg transition-shadow duration-200 overflow-hidden ${
        isLarge ? "col-span-2 row-span-2" : ""
      }`}
    >
      <div className="relative flex gap-2.5">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover w-[142px] h-[107px]`}
        />
        <h2
          className={`max-w-[207px] font-bold text-gray-900 mb-2 line-clamp-3 hover:text-teal-600 cursor-pointer ${
            isLarge ? "text-xl" : "text-base"
          }`}
        >
          {article.title}
        </h2>
      </div>
      <div className="mt-2.5">
        
        {article.excerpt && (
          <p className="max-w-[349px] text-gray-600 text-sm mb-3 line-clamp-2">
            {article.excerpt}
          </p>
        )}
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>{article.time}</span>
        </div>
      </div>
    </div>
  );
}
