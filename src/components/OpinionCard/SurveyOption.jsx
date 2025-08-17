import React from "react";

export default function SurveyOption({
  option,
  votes,
  totalVotes,
  isSelected,
  onSelect,
}) {
  const percentage =
    totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0;

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
}
