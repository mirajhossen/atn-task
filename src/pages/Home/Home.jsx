import React from "react";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import NewsSection from "../../components/NewsSection/NewsSection";
import VideoNewsSection from "../../components/VideoNews/VideoNewsSection";
import OpinionCard from "../../components/OpinionCard/OpinionCard";
import BangladeshSection from "../../components/BangladeshSection/BangladeshSection";

const Home = () => {
  return (
    <div>
      <CategoryNav />
      <NewsSection />
      <div className="container mx-auto px-16 py-2.5">
        <img src="/images/abu-saed-ads.png" alt="abu sayed ads image" />
      </div>
      <VideoNewsSection />
      <OpinionCard />
      <BangladeshSection/>
    </div>
  );
};

export default Home;
