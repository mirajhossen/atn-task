import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function Dropdown({ value, options, onChange, placeholder }) {
  return (
    <div className="relative w-[360px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 pr-10"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  )
}
