import React from "react";
import OpinionArticle from "./OpinionArticle";

export default function OpinionSection() {
  const opinionArticles = [
    {
      id: 1,
      author: "রাশীদ দত্ত",
      designation: "রাজনৈতিক বিশ্লেষক",
      title: "ভারত-বাংলাদেশ সীমায়: ইতিহাস ও বর্তমান চ্যালেঞ্জ",
      avatar: "/images/opinion-img-1.png",
    },
    {
      id: 2,
      author: "মায়া রহমান",
      designation: "গবেষক",
      title: "'বাংলাদেশি সাহিত্য' ও সাংস্কৃতিক পরিচয়: একটি বিশ্লেষণ",
      avatar: "/images/opinion-img-2.png",
    },
    {
      id: 3,
      author: "সায়েম ভাসানী",
      designation: "চলচ্চিত্র সমালোচক",
      title: "বাংলাদেশী চলচ্চিত্রের উত্থান: আন্তর্জাতিক প্ল্যাটফর্মে",
      avatar: "/images/opinion-img-3.png",
    },
    {
      id: 4,
      author: "কামাল আহমেদ",
      designation: "সাংবাদিক",
      title: "ভারতে 'বাংলাদেশি ভাষা' বিতর্ক, পূর্ণ ইন ও প্রতিক্রিয়া",
      avatar: "/images/opinion-img-4.png",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b">
        <h2 className="text-lg font-bold text-gray-900">মতামত</h2>
      </div>
      <div className="p-4">
        {opinionArticles.map((article) => (
          <OpinionArticle key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}
