import BangladeshSectionHeader from "./BangladeshSectionHeader";
import BangladeshNewsCard from "./BangladeshNewsCard";
import BangladeshNewsSmallCard from "./BangladeshNewsSmallCard";
import { Clock } from "lucide-react";

const BangladeshSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "১৫ বছর পর নতুন বিএনপির সম্মেলন আগামীকাল, চার পদে লড়ছেন ২০ নেতা",
      excerpt:
        "সম্মেলন সভাপতি, সাধারণ সম্পাদক ও ছয়টি সাংগঠনিক সম্পাদকের পদের জন্য মোট ২০ জন নেতা প্রতিদ্বন্দ্বিতা করছেন।",
      image: "/images/bd-img-1.png",
      time: "১৬ ঘণ্টা আগে",
      isLarge: true,
    },
    {
      id: 2,
      title:
        "আদিবাসী দিবস নিয়ে আলোচনায় বক্তারা: সরকার বদলালেও যেন কমেনি, শঙ্কা রয়ে গেছে",
      excerpt:
        "অধ্যাপক আইনুন নাহার বলেন, 'অন্তত্যার্থে পর যে আশা ছিল পরিবর্তনে তা হয়নি। এই সরকার কি আজ পর্যন্ত আদিবাসী শব্দ ব্যবহার করেছে? কোন করেনি?'",
      image: "/images/bd-img-2.png",
      time: "১৬ ঘণ্টা আগে",
      isLarge: false,
    },
    {
      id: 3,
      title:
        "আদিবাসী দিবস নিয়ে আলোচনায় বক্তারা: সরকার বদলালেও যেন কমেনি, শঙ্কা রয়ে গেছে",
      excerpt:
        "অধ্যাপক আইনুন নাহার বলেন, 'অন্তত্যার্থে পর যে আশা ছিল পরিবর্তনে তা হয়নি। এই সরকার কি আজ পর্যন্ত আদিবাসী শব্দ ব্যবহার করেছে? কোন করেনি?'",
      image: "/images/bd-img-2.png",
      time: "১৬ ঘণ্টা আগে",
      isLarge: false,
    },
    {
      id: 4,
      title:
        "আদিবাসী দিবস নিয়ে আলোচনায় বক্তারা: সরকার বদলালেও যেন কমেনি, শঙ্কা রয়ে গেছে",
      excerpt:
        "অধ্যাপক আইনুন নাহার বলেন, 'অন্তত্যার্থে পর যে আশা ছিল পরিবর্তনে তা হয়নি। এই সরকার কি আজ পর্যন্ত আদিবাসী শব্দ ব্যবহার করেছে? কোন করেনি?'",
      image: "/images/bd-img-2.png",
      time: "১৬ ঘণ্টা আগে",
      isLarge: false,
    },
    {
      id: 5,
      title:
        "আদিবাসী দিবস নিয়ে আলোচনায় বক্তারা: সরকার বদলালেও যেন কমেনি, শঙ্কা রয়ে গেছে",
      excerpt:
        "অধ্যাপক আইনুন নাহার বলেন, 'অন্তত্যার্থে পর যে আশা ছিল পরিবর্তনে তা হয়নি। এই সরকার কি আজ পর্যন্ত আদিবাসী শব্দ ব্যবহার করেছে? কোন করেনি?'",
      image: "/images/bd-img-2.png",
      time: "১৬ ঘণ্টা আগে",
      isLarge: false,
    },
    {
      id: 6,
      title:
        "আদিবাসী দিবস নিয়ে আলোচনায় বক্তারা: সরকার বদলালেও যেন কমেনি, শঙ্কা রয়ে গেছে",
      excerpt:
        "অধ্যাপক আইনুন নাহার বলেন, 'অন্তত্যার্থে পর যে আশা ছিল পরিবর্তনে তা হয়নি। এই সরকার কি আজ পর্যন্ত আদিবাসী শব্দ ব্যবহার করেছে? কোন করেনি?'",
      image: "/images/bd-img-2.png",
      time: "১৬ ঘণ্টা আগে",
      isLarge: false,
    },
    {
      id: 7,
      title: "ইরানের হামলায় ট্রাম্পের পরিকল্পিত কর্মতার অনিষ্কতি",
      excerpt: "",
      image: "/images/bd-img-3.png",
      time: "১ ঘণ্টা আগে",
      isLarge: false,
    },
  ];

  return (
    <div className=" bg-white">
      {/* Header */}
      <BangladeshSectionHeader />

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large featured article */}
          <div className="col-span-1">
            <BangladeshNewsCard article={newsArticles[0]} isLarge={true} />
          </div>

          {/* Regular articles */}
          <div className="col-span-2 grid grid-cols-2">
            {newsArticles.splice(1, 4).map((article) => (
              <BangladeshNewsSmallCard key={article.id} article={article} />
            ))}
          </div>

          {/* Regular articles */}
          <div className="col-span-1">
            <div>
              <img
                src="/images/bd-img-3.png"
                alt=""
                className={`w-full object-cover w-[142px] h-[107px]`}
              />
              <h2
                className={`max-w-[207px] font-bold text-gray-900 mb-2 line-clamp-3 hover:text-teal-600 cursor-pointer
                }`}
              >
                ইরানের হুমকিতে ট্রাম্পের পইরকল্পিত করিডোর অনিশ্চিত
              </h2>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                <span>১ ঘণ্টা আগে</span>
              </div>
            </div>
            <div>
              <img
                src="/images/bd-img-3.png"
                alt=""
                className={`w-full object-cover w-[142px] h-[107px]`}
              />
              <h2
                className={`max-w-[207px] font-bold text-gray-900 mb-2 line-clamp-3 hover:text-teal-600 cursor-pointer
                }`}
              >
                ইরানের হুমকিতে ট্রাম্পের পইরকল্পিত করিডোর অনিশ্চিত
              </h2>
               <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>১ ঘণ্টা আগে</span>
                      </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BangladeshSection;
