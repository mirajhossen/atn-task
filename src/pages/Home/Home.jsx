import React from "react";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import NewsSection from "../../components/NewsSection/NewsSection";


const Home = () => {
  return (
    <div>
      <CategoryNav />
      <NewsSection />
      <div className="px-16 py-2.5">
        <img src="/images/abu-saed-ads.png" alt="abu sayed ads image" />
      </div>
    </div>
  );
};

export default Home;
