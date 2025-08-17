import React from "react";
import VideoNewsCard from "./VideoNewsCard";

const items = [
  {
    id: 1,
    img: "/images/video-news-1.png",
    title: "৫ দাবী নিয়ে জুলাই ঘোষনাপত্রে যুক্ত, সংবাদ সম্মেলনের আয়োজন",
    time: "২৩",
  },
  {
    id: 2,
    img: "/images/video-news-2.png",
    title: "তারেক রহমানই দেশের ভবিষ্যৎ প্রধানমন্ত্রী: মির্জা ফখরুল",
    time: "২৩",
  },
  {
    id: 3,
    img: "/images/video-news-3.png",
    title: "বলির পাঠা হলেন টিউলিপ সিদ্দিকী",
    time: "২৩",
  },
  {
    id: 4,
    img: "/images/video-news-4.png",
    title: "গাজাকে ভুলে যেও না— আল জাজিরা সাংবাদিকের শেষ বার্তা",
    time: "২৩",
  },
];

export default function VideoNewsSection() {
  return (
    <div className="mx-4 p-2.5 grid grid-cols-4 gap-2.5 border">
      {items?.map((news, index) => (
        <div key={index}>
          <VideoNewsCard news={news}/>
        </div>
      ))}
    </div>
  );
}
