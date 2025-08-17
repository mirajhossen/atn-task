import React from "react";

export default function OpinionArticle({ author, designation, title, avatar }) {
  return (
    <div className="flex items-start space-x-3 py-4 border-b border-gray-200 last:border-b-0">
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <h3 className="text-gray-900 font-semibold text-sm mb-1 leading-tight hover:text-blue-600 cursor-pointer">
          {title}
        </h3>
        <p className="text-gray-700 font-medium text-xs">{author}</p>
        <p className="text-gray-500 text-xs">{designation}</p>
      </div>
    </div>
  );
}
