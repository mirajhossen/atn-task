import React, { useEffect, useState } from "react";

export default function ElectionCard({
  image,
  title,
  description,
  publishedAt,
}) {
  const [timeAgo, setTimeAgo] = useState("");

  const getTimeAgo = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 1000); // in seconds

    if (diff < 60) return `${diff} সেকেন্ড আগে`;
    if (diff < 3600) return `${Math.floor(diff / 60)} মিনিট আগে`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} ঘণ্টা আগে`;
    return `${Math.floor(diff / 86400)} দিন আগে`;
  };

  useEffect(() => {
    setTimeAgo(getTimeAgo(publishedAt));
    const interval = setInterval(() => {
      setTimeAgo(getTimeAgo(publishedAt));
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, [publishedAt]);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold text-gray-900 leading-snug line-clamp-2">
          {title}
        </h2>
        <p className="mt-2 text-gray-700 text-sm leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        <div className="flex items-center mt-4 text-gray-500 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
}
