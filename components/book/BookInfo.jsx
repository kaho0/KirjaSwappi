import { BookOpen } from "lucide-react"

const BookInfo = ({ condition, language }) => {
  return (
    <div className="book-info-container mb-6 mt-8">
      <div className="book-info-section">
        <div className="book-info-item book-condition">
          <p className="text-xs text-gray-500 mb-2">Book Condition</p>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 flex items-center justify-center mb-1">
              <BookOpen className="w-4 h-4 text-gray-600" />
            </div>
            <span className="text-sm text-gray-800">{condition}</span>
          </div>
        </div>

        <div className="book-info-item book-language">
          <p className="text-xs text-gray-500 mb-2">Book language</p>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 flex items-center justify-center mb-1">
              <span className="text-base font-medium text-gray-800">EN</span>
            </div>
            <span className="text-sm text-gray-800">{language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookInfo
