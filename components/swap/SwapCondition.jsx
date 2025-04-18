"use client"

import { useState } from "react"
import { MdOutlineSwapHoriz } from "react-icons/md"
import SwapByBooks from "./SwapByBooks"
import SwapByGenres from "./SwapByGenres"
import OpenForOffers from "./OpenForOffers"
import ExchangeOptionsModal from "../exchange/ExchangeOptionsModal"

const SwapCondition = ({ swapCondition }) => {
  const [showOptions, setShowOptions] = useState(false)
  const [activeOption, setActiveOption] = useState(swapCondition.type || "OpenForOffers")

  const toggleOptions = () => {
    setShowOptions(!showOptions)
  }

  const handleSelectOption = (option) => {
    setActiveOption(option)
    setShowOptions(false)
  }

  const renderSwapContent = () => {
    switch (activeOption) {
      case "SwapByBooks":
        return <SwapByBooks books={swapCondition.books || []} />
      case "SwapByBooksSingle":
        return (
          <SwapByBooks
            books={[
              swapCondition.books?.[0] || {
                title: "Harry Potter and The Order of The Phoenix",
                author: "J.K. Rowling",
                coverImage:
                  "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1064&auto=format&fit=crop",
              },
            ]}
          />
        )
      case "SwapByGenres":
        return <SwapByGenres genres={swapCondition.genres || ["Thriller", "Non-Fiction"]} />
      case "OpenForOffers":
      default:
        return <OpenForOffers />
    }
  }

  const getSubtitle = () => {
    switch (activeOption) {
      case "SwapByBooks":
        return "Either one of these"
      case "SwapByBooksSingle":
        return "Looking for this specific book"
      case "SwapByGenres":
        return "Either one of these"
      case "OpenForOffers":
        return "Flexible exchange"
      default:
        return "Either one of these"
    }
  }

  return (
    <div className="my-4 relative">
      <div className="flex items-center justify-center mb-2">
        <button onClick={toggleOptions} className="exchange-icon" aria-label="Exchange options">
          <MdOutlineSwapHoriz className="w-5 h-5 text-white" />
        </button>
      </div>
      <h3 className="text-center text-sm font-medium mb-1 text-gray-800">Exchange Condition</h3>
      <p className="text-center text-xs text-gray-500 mb-3">{getSubtitle()}</p>

      <ExchangeOptionsModal
        isOpen={showOptions}
        onClose={() => setShowOptions(false)}
        onSelectOption={handleSelectOption}
      />

      {renderSwapContent()}
    </div>
  )
}

export default SwapCondition
