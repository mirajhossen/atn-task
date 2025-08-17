import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import React, { useState } from "react";
import SurveyOption from "./SurveyOption";

export default function OnlineSurvey() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const surveyData = {
    question:
      "চলিতে হল রাজনীতি বক্তার সাবিকে মন্তরাতে মিছিল করতে শিক্ষার্থীরা। আপনি কী চান?",
    options: [
      { id: 1, text: "হল রাজনীতি চলুক", votes: 245 },
      { id: 2, text: "হল রাজনীতি বন্ধ থোক", votes: 892 },
      { id: 3, text: "মন্তব্য নেই", votes: 163 },
    ],
    totalVotes: 1300,
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
          <p className="text-sm text-gray-600">মোট ভোটদাতা ৩,৭৫৬ জন</p>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Facebook className="w-8 h-8 text-blue-600 cursor-pointer hover:text-blue-700" />
          <Twitter className="w-8 h-8 text-gray-800 cursor-pointer hover:text-gray-900" />
          <Youtube className="w-8 h-8 text-red-600 cursor-pointer hover:text-red-700" />
          <Linkedin className="w-8 h-8 text-blue-700 cursor-pointer hover:text-blue-800" />
        </div>
      </div>
    </div>
  );
}
