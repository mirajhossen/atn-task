import { Clock } from "lucide-react";
import NewsCard from "./NewsCard";
import PoliticsCard from "./PoliticsCard";
import FamousNewsList from "./FamousNewsList";

const News = [
  {
    id: 1,
    img: "/images/card-img-1.png",
    title: "ভারতের উন্নতি হজম করতে পারছে না যুক্তরাষ্ট্র",
    description:
      "ভারতের উন্নতি হজম করতে পারছে না যুক্তরাষ্ট্র। এমন মন্তব্য করেছেন ভারতের সাবেক উপ-রাষ্ট্রপতি এম ভেঙ্কাইয়া নাইডু। তার মতে, যুক্তরাষ্ট্রের সঙ্গে বাণিজ্য..",
    time: "১২",
  },
  {
    id: 2,
    img: "/images/card-img-2.png",
    title: "বিষাক্ত প্লাস্টিকের ঝুঁকিতে বাংলাদেশ",
    description:
      "সস্তা, সহজলভ্য এবং বিকল্প হওয়ায় প্রতি বছর প্লাস্টিকের ব্যবহার ১৫ শতাংশ করে বাড়ছে; কিন্তু বিজ্ঞানীরা জানাচ্ছেন, প্রত্যক্ষভাবে প্লাস্টিক সস্তা বলে মনে হলেও পরোক্ষভাবে এটি অত্যন্ত ব্যয়বহুল।",
    time: "২৩",
  },
  {
    id: 3,
    img: "/images/card-img-3.png",
    title: "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
    description:
      "রাশিয়ার পররাষ্ট্র মন্ত্রণালয় শনিবার (৯ আগস্ট) ইসরায়েলের গাজা শহর দখল পরিকল্পনার নিন্দা জানিয়েছে। মন্ত্রণালয় জানিয়েছে, এটি গাজা উপত্যকায় মানবিক সংকটকে।",
    time: "২৪",
  },
  {
    id: 4,
    img: "/images/card-img-1.png",
    title: "ভারতের উন্নতি হজম করতে পারছে না যুক্তরাষ্ট্র",
    description:
      "ভারতের উন্নতি হজম করতে পারছে না যুক্তরাষ্ট্র। এমন মন্তব্য করেছেন ভারতের সাবেক উপ-রাষ্ট্রপতি এম ভেঙ্কাইয়া নাইডু। তার মতে, যুক্তরাষ্ট্রের সঙ্গে বাণিজ্য..",
    time: "১২",
  },
  {
    id: 5,
    img: "/images/card-img-2.png",
    title: "বিষাক্ত প্লাস্টিকের ঝুঁকিতে বাংলাদেশ",
    description:
      "সস্তা, সহজলভ্য এবং বিকল্প হওয়ায় প্রতি বছর প্লাস্টিকের ব্যবহার ১৫ শতাংশ করে বাড়ছে; কিন্তু বিজ্ঞানীরা জানাচ্ছেন, প্রত্যক্ষভাবে প্লাস্টিক সস্তা বলে মনে হলেও পরোক্ষভাবে এটি অত্যন্ত ব্যয়বহুল।",
    time: "২৩",
  },
  {
    id: 6,
    img: "/images/card-img-3.png",
    title: "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
    description:
      "রাশিয়ার পররাষ্ট্র মন্ত্রণালয় শনিবার (৯ আগস্ট) ইসরায়েলের গাজা শহর দখল পরিকল্পনার নিন্দা জানিয়েছে। মন্ত্রণালয় জানিয়েছে, এটি গাজা উপত্যকায় মানবিক সংকটকে।",
    time: "২৪",
  },
];

const PoliticsNews = [
  {
    id: 1,
    img: "/images/card-img-1.png",
    title: "ভারতের উন্নতি হজম করতে পারছে না যুক্তরাষ্ট্র",
    time: "১",
  },
  {
    id: 2,
    img: "/images/card-img-2.png",
    title: "বিষাক্ত প্লাস্টিকের ঝুঁকিতে বাংলাদেশ",
    time: "২",
  },
  {
    id: 3,
    img: "/images/card-img-3.png",
    title: "গাজা দখল পরিকল্পনার প্রতিবাদ জানাল রাশিয়া",
    time: "২",
  },
];

const newsList = [
  {
    id: 1,
    img: "/images/news-1.png",
    title: "ইরানের হুমকিতে ট্রাম্পের পইরকল্পিত করিডোর অনিশ্চিত",
    time: "১",
    category: "Politics",
  },
  {
    id: 2,
    img: "/images/news-2.png",
    title: "ইরানের হুমকিতে ট্রাম্পের পইরকল্পিত করিডোর অনিশ্চিত",
    time: "১",
    category: "Politics",
  },
  {
    id: 3,
    img: "/images/news-3.png",
    title: "ইরানের হুমকিতে ট্রাম্পের পইরকল্পিত করিডোর অনিশ্চিত",
    time: "১",
    category: "Politics",
  },
];

const NewsSection = () => {
  return (
    <div className="px-4 flex my-10 gap-2.5">
      {/* left-side */}
      <div className="w-[60%]">
        <div className="p-2.5  flex gap-2.5 border border-[#D9D9D9] rounded-md">
          <div className="w-[45%] h-[200px] ">
            <img className="w-full h-full" src="/images/minister.png" />
          </div>
          <div className=" w-[55%] flex flex-col gap-2.5">
            <h1 className="max-w-[399px] text-[36px] text-semibold leading-[42px]">
              নির্বাচনে ৮০ হাজারের বেশি সেনাসদস্য দায়িত্বে থাকবে :স্বরাষ্ট্র
              উপদেষ্টা
            </h1>
            <p className="text-base text-[#4B4B4B]">
              আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচনে ৮০ হাজারের বেশি সেনাসদস্য
              দায়িত্ব পালন করবে বলে জানিয়েছেন অন্তর্বর্তী সরকারের স্বরাষ্ট্র
              উপদেষ্টা লেফটেন্যান্ট জেনারেল (অব.) জাহাঙ্গীর আলম চৌধুরী।
            </p>
            <div className="flex gap-1 ">
              <span>
                <Clock />
              </span>
              <span className="text-sm text-[#868686]">১০ মিনিট আগে</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[22px]">
          {News.map((item) => (
            <NewsCard item={item} />
          ))}
        </div>
      </div>

      {/* right-side */}
      <div className="w-[40%] flex gap-2.5">
        <div className="w-[60%] p-2.5 border rounded-md space-y-2.5">
          {/* single news  */}
          <div className="">
            <div className="relative">
              <img src="/images/trump.png" alt="" />
              <span className="px-[21px] py-[7px] opacity-70 bg-black text-white absolute top-0 right-0">
                Politics
              </span>
            </div>
            <h2>ইরানের হুমকিতে ট্রাম্পের পইরকল্পিত করিডোর অনিশ্চিত</h2>
            <div className="flex gap-1 items-center">
              <Clock size={20} className="text-[#868686]" />
              <span className="text-[#868686] text-sm">১০ মিনিট আগে</span>
            </div>
          </div>

          {/* divider  */}
          <div className="my-2.5 h-[1px] bg-[#D9D9D9]"></div>

          {/* multi news  */}
          <div>
            {newsList?.map((news, index) => (
              <div key={index} className="">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="relative">
                    <img
                      className="w-full h-[107px]"
                      src={news?.img}
                      alt={news?.title}
                    />
                    <span className="px-[21px] py-[7px] opacity-70 bg-black text-xs text-white absolute top-0 left-0">
                      {news?.category}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h4 className="line-clamp-3">{news?.title}</h4>
                    <div className="flex gap-1 items-center">
                      <Clock size={20} className="text-[#868686]" />
                      <span className="text-[#868686] text-sm">
                        {news?.time} ঘন্টা আগে
                      </span>
                    </div>
                  </div>
                </div>
                {/* divider  */}
                {index !== newsList.length - 1 && (
                  <div className="my-2.5 h-[1px] bg-[#D9D9D9]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-[40%]">
          <div className="bg-[#D9D9D9] h-[212px]"></div>
          <div className="my-2.5 h-[1px] bg-[#D9D9D9]"></div>
          <div className="bg-[#D9D9D9] h-[212px]"></div>
          <div className="my-2.5 h-[1px] bg-[#D9D9D9]"></div>
          <div className="bg-[#D9D9D9] h-[212px]"></div>
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
