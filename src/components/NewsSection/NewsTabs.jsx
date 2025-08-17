import { useState } from "react";

export default function NewsTabs() {
  const [activeTab, setActiveTab] = useState("latest");

  const latestNews = [
    "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
    "ইসরায়েলের নতুন দখলদারিত্বের বিরুদ্ধে প্রতিবাদে নেমেছে আন্তর্জাতিক সম্প্রদায়",
    "গাজায় জরুরি মানবিক সাহায্য পাঠানোর আহ্বান জানাল ইউএন",
    "প্যালেস্টাইনের স্বাধীনতার দাবিতে আন্দোলনে বুড়ি পেয়েছে বিশ্বজুড়ে",
    "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
  ];

  const popularNews = [
    "বাংলাদেশের নতুন অর্থনৈতিক পরিকল্পনা প্রকাশ",
    "বিশ্বকাপে দুর্দান্ত জয় বাংলাদেশের",
    "ঢাকায় বড় আকারের প্রযুক্তি মেলা শুরু",
    "শিক্ষা খাতে বাজেট বৃদ্ধির প্রস্তাব",
    "নতুন মহাকাশ গবেষণা কেন্দ্র উদ্বোধন",
  ];

  const data = activeTab === "latest" ? latestNews : popularNews;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow border">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("latest")}
          className={`flex-1 text-center py-2 font-medium ${
            activeTab === "latest"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          সর্বশেষ
        </button>
        <button
          onClick={() => setActiveTab("popular")}
          className={`flex-1 text-center py-2 font-medium ${
            activeTab === "popular"
              ? "border-b-2 border-black text-black"
              : "text-gray-500"
          }`}
        >
          জনপ্রিয়
        </button>
      </div>

      {/* List */}
      <ul className="divide-y">
        {data.map((item, index) => (
          <li key={index} className="flex items-start gap-3 p-3">
            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border text-sm">
              {index + 1}
            </span>
            <p className="text-gray-800 text-sm">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
