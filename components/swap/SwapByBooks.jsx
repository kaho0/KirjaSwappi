import React from "react";
import { AiOutlineBook } from "react-icons/ai";

const SwapByBooks = ({ books }) => {
  if (books.length === 1) {
    const book = books[0];
    return (
      <div className="exchange-condition-container">
        <div className="bg-[#dee7f5] p-4 rounded-xl">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <AiOutlineBook className="w-5 h-6 text-gray-800" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium mb-1 text-gray-800">
                {book.title}
              </h4>
              <p className="text-xs text-gray-600">By {book.author}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="exchange-condition-container">
      <div className="flex gap-4">
        {books.map((book, index) => (
          <div key={index} className="flex-1 bg-[#dee7f5] p-4 rounded-xl">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <AiOutlineBook className="w-5 h-6 text-gray-800" />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1 text-gray-800">
                  {book.title}
                </h4>
                <p className="text-xs text-gray-600">By {book.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapByBooks;
