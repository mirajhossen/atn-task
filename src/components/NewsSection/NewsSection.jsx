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

const NewsSection = () => {
  return (
    <div className="flex my-10 ">
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
      <div className=" flex gap-2.5 w-[40%] h-60 ">
        <div className="h-[627px]">
          <div className="w-[50%] h-[170px] flex flex-col">
            <div className="p-2.5 flex flex-col gap-2.5">
              <img src="/images/card-img-1.png" alt="" />
              <h1 className="text-[18px] font-medium">
                ভারতের উন্নতি হজম করতে পারছে না যুক্তরাষ্ট্র
              </h1>

              <div className=" flex gap-1 ">
                <span>
                  <Clock />
                </span>
                <span className="text-sm text-[#868686]">১ ঘণ্টা আগে</span>
              </div>
            </div>

            <div className="grid grid-rows-3 gap-[22px]">
              {PoliticsNews.map((item) => (
                <PoliticsCard item={item} />
              ))}
            </div>
          </div>
          <div className=" p-2.5 flex flex-row gap-2.5">
            <div className="w-full h-[200px] bg-red-300"></div>
            <div className="w-full h-[200px] bg-grey-300"></div>
            <div className="w-full h-[200px] bg-grey-300"></div>
          </div>
        </div>
        <div className="h-[381px]">
          <FamousNewsList />
        </div>
      </div>
    </div>
  );
};
export default NewsSection;
