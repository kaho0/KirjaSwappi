"use client"

import { BookOpenText, Tag, Gift } from "lucide-react"

const ExchangeConditionDisplay = ({ swapCondition, onInitiateExchange }) => {
  const getIcon = () => {
    switch (swapCondition.type) {
      case "SwapByBooks":
        return <BookOpenText className="w-5 h-5 text-white" />
      case "SwapByGenres":
        return <Tag className="w-5 h-5 text-white" />
      case "OpenForOffers":
      default:
        return <Gift className="w-5 h-5 text-white" />
    }
  }

  const getTitle = () => {
    switch (swapCondition.type) {
      case "SwapByBooks":
        return "Swap by Books"
      case "SwapByGenres":
        return "Swap by Genre"
      case "OpenForOffers":
      default:
        return "Open to Offer"
    }
  }

  const getSubtitle = () => {
    switch (swapCondition.type) {
      case "SwapByBooks":
        return swapCondition.books?.length > 1 ? "Either one of these" : "Looking for this specific book"
      case "SwapByGenres":
        return "Either one of these genres"
      case "OpenForOffers":
        return "Flexible exchange"
      default:
        return "Either one of these"
    }
  }

  return (
    <div className="my-4 relative">
      <div className="flex items-center justify-center mb-2">
        <button onClick={onInitiateExchange} className="exchange-icon" aria-label="Exchange options">
          {getIcon()}
        </button>
      </div>
      <h3 className="text-center text-sm font-medium mb-1 text-gray-800">{getTitle()}</h3>
      <p className="text-center text-xs text-gray-500 mb-3">{getSubtitle()}</p>
    </div>
  )
}

export default ExchangeConditionDisplay
