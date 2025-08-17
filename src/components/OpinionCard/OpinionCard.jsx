import React, { useState } from 'react';
import { Facebook, Twitter, Youtube, Linkedin, MoreHorizontal, Play } from 'lucide-react';

// Opinion Article Component
const OpinionArticle = ({ author, designation, title, avatar }) => (
  <div className="flex items-start space-x-3 py-4 border-b border-gray-200 last:border-b-0">
    <img 
      src={avatar} 
      alt={author}
      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
    />
    <div className="flex-1">
      <h3 className="text-gray-900 font-semibold text-sm mb-1 leading-tight hover:text-blue-600 cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-700 font-medium text-xs">{author}</p>
      <p className="text-gray-500 text-xs">{designation}</p>
    </div>
  </div>
);

// Opinion Section Component
const OpinionSection = () => {
  const opinionArticles = [
    {
      id: 1,
      author: "রাশীদ দত্ত",
      designation: "রাজনৈতিক বিশ্লেষক",
      title: "ভারত-বাংলাদেশ সীমায়: ইতিহাস ও বর্তমান চ্যালেঞ্জ",
      avatar: "/images/opinion-img-1.png"
    },
    {
      id: 2,
      author: "মায়া রহমান",
      designation: "গবেষক",
      title: "'বাংলাদেশি সাহিত্য' ও সাংস্কৃতিক পরিচয়: একটি বিশ্লেষণ",
      avatar: "/images/opinion-img-2.png"
    },
    {
      id: 3,
      author: "সায়েম ভাসানী",
      designation: "চলচ্চিত্র সমালোচক",
      title: "বাংলাদেশী চলচ্চিত্রের উত্থান: আন্তর্জাতিক প্ল্যাটফর্মে",
      avatar: "/images/opinion-img-3.png"
    },
    {
      id: 4,
      author: "কামাল আহমেদ",
      designation: "সাংবাদিক",
      title: "ভারতে 'বাংলাদেশি ভাষা' বিতর্ক, পূর্ণ ইন ও প্রতিক্রিয়া",
      avatar: "/images/opinion-img-4.png"
    }
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
};

// Survey Option Component
const SurveyOption = ({ option, votes, totalVotes, isSelected, onSelect }) => {
  const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;
  
  return (
    <div className="mb-3">
      <label className="flex items-center space-x-3 cursor-pointer">
        <input
          type="radio"
          name="survey"
          checked={isSelected}
          onChange={onSelect}
          className="w-4 h-4 text-blue-600"
        />
        <span className="flex-1 text-sm text-gray-700">{option}</span>
      </label>
      {totalVotes > 0 && (
        <div className="mt-1 ml-7">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-500">{percentage}%</span>
        </div>
      )}
    </div>
  );
};

// Social Share Component
const SocialShare = () => (
  <div className="flex items-center space-x-2 mt-4">
    <Facebook className="w-8 h-8 text-blue-600 cursor-pointer hover:text-blue-700" />
    <Twitter className="w-8 h-8 text-gray-800 cursor-pointer hover:text-gray-900" />
    <Youtube className="w-8 h-8 text-red-600 cursor-pointer hover:text-red-700" />
    <Linkedin className="w-8 h-8 text-blue-700 cursor-pointer hover:text-blue-800" />
  </div>
);

// Online Survey Component
const OnlineSurvey = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  
  const surveyData = {
    question: "চলিতে হল রাজনীতি বক্তার সাবিকে মন্তরাতে মিছিল করতে শিক্ষার্থীরা। আপনি কী চান?",
    options: [
      { id: 1, text: "হল রাজনীতি চলুক", votes: 245 },
      { id: 2, text: "হল রাজনীতি বন্ধ থোক", votes: 892 },
      { id: 3, text: "মন্তব্য নেই", votes: 163 }
    ],
    totalVotes: 1300
  };

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="bg-gray-50 px-4 py-3 border-b">
        <h2 className="text-lg font-bold text-gray-900">অনলাইন জরিপ</h2>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <img 
            src="/images/online-servey.png" 
            alt="Survey Image"
            className="w-full h-32 object-cover rounded-lg mb-3"
          />
          <p className="text-sm text-gray-800 leading-relaxed">
            {surveyData.question}
          </p>
        </div>
        
        <div className="space-y-2">
          {surveyData.options.map((option) => (
            <SurveyOption
              key={option.id}
              option={option.text}
              votes={option.votes}
              totalVotes={hasVoted ? surveyData.totalVotes : 0}
              isSelected={selectedOption === option.id}
              onSelect={() => setSelectedOption(option.id)}
            />
          ))}
        </div>
        
        {!hasVoted && (
          <button
            onClick={handleVote}
            disabled={!selectedOption}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-medium transition-colors"
          >
            ভোট দিন
          </button>
        )}
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            মোট ভোটদাতা ৩,৭৫৬ জন
          </p>
        </div>
        
        <SocialShare />
      </div>
    </div>
  );
};

// Advertisement Component
const Advertisement = ({ type = "banner" }) => {
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
};

// Main Layout Component
const NewsLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Opinion Section */}
          <div className="lg:col-span-1">
            <OpinionSection />
          </div>
          
          {/* Middle Column - Online Survey */}
          <div className="lg:col-span-1">
            <OnlineSurvey />
          </div>
          
          {/* Right Column - Advertisements */}
          <div className="lg:col-span-1 space-y-6">
            <Advertisement type="banner" />
            <Advertisement type="video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;