"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { MdOutlineSwapHoriz } from "react-icons/md"
import { BiBook } from "react-icons/bi"

const ExchangeOptionsModal = ({ isOpen, onClose, onSelectOption }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !isVisible) return null

  const handleOptionSelect = (option) => {
    onSelectOption(option)
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-t-xl w-full max-w-md p-4 transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Select Exchange Option</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleOptionSelect("SwapByBooks")}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <BiBook className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium">Swap by Books</span>
            <span className="text-xs text-gray-500">Multiple books</span>
          </button>

          <button
            onClick={() => handleOptionSelect("SwapByBooksSingle")}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <BiBook className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium">Swap by Specific Book</span>
            <span className="text-xs text-gray-500">Single book</span>
          </button>

          <button
            onClick={() => handleOptionSelect("SwapByGenres")}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <BiBook className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium">Swap by Genre</span>
            <span className="text-xs text-gray-500">Genre preferences</span>
          </button>

          <button
            onClick={() => handleOptionSelect("OpenForOffers")}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-blue-50 hover:border-blue-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <MdOutlineSwapHoriz className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium">Open to Offer</span>
            <span className="text-xs text-gray-500">Flexible exchange</span>
          </button>
        </div>

        <div className="mt-6 border-t pt-4">
          <button
            onClick={onClose}
            className="w-full py-2 bg-gray-100 rounded-md text-gray-700 font-medium hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExchangeOptionsModal
