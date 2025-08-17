import { Clock } from "lucide-react";
import React from "react";

export default function BangladeshNewsCard({ article, isLarge = false }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${
        isLarge ? "col-span-2 row-span-2" : ""
      }`}
    >
      <div className="relative">
        <img
          src={article.image}
          alt={article.title}
          className={`w-full object-cover ${isLarge ? "h-64" : "h-48"}`}
        />
      </div>
      <div className="p-4">
        <h2
          className={`font-bold text-gray-900 mb-2 line-clamp-3 hover:text-teal-600 cursor-pointer ${
            isLarge ? "text-xl" : "text-base"
          }`}
        >
          {article.title}
        </h2>
        {article.excerpt && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
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
