import React from "react";

const items = [
  {
    num: "১",
    text: "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
  },
  {
    num: "২",
    text: "ইসরায়েলের নতুন দখলদারিত্বের বিরুদ্ধে প্রতিবাদে নেমেছে আন্তর্জাতিক সম্প্রদায়",
  },
  {
    num: "৩",
    text: "গাজায় জরুরি মানবিক সহায়তা পাঠানোর আহ্বান জানাল ইউএন",
  },
  {
    num: "৪",
    text: "প্যালেস্টাইনের স্বাধীনতার দাবিতে আন্দোলনে বৃদ্ধি পেয়েছে বিশ্বজুড়ে",
  },
  {
    num: "৫",
    text: "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
  },
];

const FamousNewsList = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-[620px] rounded-xl border border-gray-300 bg-white shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-2 text-sm sm:text-base font-medium text-gray-800">
          <div className="px-5 py-3 border-b border-gray-200">সর্বশেষ</div>
          <div className="px-5 py-3 border-b border-gray-200 border-l">
            জনপ্রিয়
          </div>
        </div>

        {/* List */}
        <ul className="divide-y divide-gray-200">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4 px-5 py-3">
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm text-gray-700 leading-none">
                {item.num}
              </span>
              <p className="text-gray-800 text-sm sm:text-base leading-6 select-none">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FamousNewsList;
