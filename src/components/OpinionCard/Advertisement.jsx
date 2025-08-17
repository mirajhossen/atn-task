import { MoreHorizontal, Play } from "lucide-react";
import React from "react";

export default function Advertisement({ type = "banner" }) {
  if (type === "banner") {
    return (
      <div className="bg-red-600 rounded-lg overflow-hidden shadow-sm">
        <div className="relative h-40 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">ZINGER</div>
            <div className="text-lg">BOGO DUO</div>
            <div className="text-3xl font-black text-yellow-400">FREE</div>
            <div className="flex items-center justify-center mt-2">
              <div className="w-16 h-16 bg-orange-400 rounded-full mr-2"></div>
              <span className="text-2xl font-bold">+</span>
              <div className="w-16 h-16 bg-orange-400 rounded-full ml-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-3 bg-gray-100 border-b">
        <span className="text-sm text-gray-600 font-medium">ADVERTISEMENT</span>
        <div className="flex items-center space-x-1">
          <Play className="w-4 h-4 text-gray-600" />
          <MoreHorizontal className="w-4 h-4 text-gray-600" />
        </div>
      </div>
      <div className="h-64 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Video Advertisement</span>
      </div>
    </div>
  );
}
