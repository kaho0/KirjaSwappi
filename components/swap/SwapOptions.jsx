"use client"

import { BookOpenText, Gift } from "lucide-react"

const SwapOptions = ({ onSelect, activeOption }) => {
  return (
    <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-2 w-64">
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => onSelect("SwapByBooks")}
          className={`p-3 rounded-md flex flex-col items-center justify-center ${
            activeOption === "SwapByBooks" ? "bg-blue-100" : "hover:bg-gray-100"
          }`}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
            <BookOpenText className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-medium">Swap by Books</span>
          <span className="text-xs text-gray-500">Multiple</span>
        </button>

        <button
          onClick={() => onSelect("SwapByBooks")}
          className={`p-3 rounded-md flex flex-col items-center justify-center ${
            activeOption === "SwapByBooks" ? "bg-blue-100" : "hover:bg-gray-100"
          }`}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
            <BookOpenText className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-medium">Swap by Books</span>
          <span className="text-xs text-gray-500">Single</span>
        </button>

        <button
          onClick={() => onSelect("SwapByGenres")}
          className={`p-3 rounded-md flex flex-col items-center justify-center ${
            activeOption === "SwapByGenres" ? "bg-blue-100" : "hover:bg-gray-100"
          }`}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
            <BookOpenText className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-medium">Swap by Genres</span>
        </button>

        <button
          onClick={() => onSelect("OpenForOffers")}
          className={`p-3 rounded-md flex flex-col items-center justify-center ${
            activeOption === "OpenForOffers" ? "bg-blue-100" : "hover:bg-gray-100"
          }`}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mb-2">
            <Gift className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs font-medium">Open to Offer</span>
        </button>
      </div>
    </div>
  )
}

export default SwapOptions
